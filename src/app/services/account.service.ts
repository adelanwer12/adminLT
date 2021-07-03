import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Login} from "@/Models/login";
import {User} from "@/Models/user";
import {ReplaySubject} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = '/api/account/';
  private currentUserSource = new ReplaySubject<User>(1);
  currentUser$ = this.currentUserSource.asObservable();
  user: any =null;
  constructor(private http: HttpClient, private router: Router) { }

  login(model: Login){
    return this.http.post(this.baseUrl + "login", model).pipe(
      map((response: User)=>{
        const user = response;
        if (user){
          localStorage.setItem("user", JSON.stringify(user));
          this.currentUserSource.next(user);
        }
      })
    );
  }

  setCurrentUser(User: User){
    this.currentUserSource.next(User);
  }

  logout(){
    localStorage.removeItem("user");
    this.currentUserSource.next(null);
    this.router.navigate(['/login']);
  }

}
