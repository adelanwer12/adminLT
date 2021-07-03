import {Component, OnInit} from '@angular/core';
import {AccountService} from "@services/account.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private accountService: AccountService, private router: Router) {
  }
  ngOnInit(): void {
    this.setCurrentUser();
  }

  setCurrentUser(){
      const user = JSON.parse(localStorage.getItem('user'));
      if (user) this.accountService.setCurrentUser(user);
      this.router.navigate(['/login'])
  }
}
