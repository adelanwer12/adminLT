import {
  Component,
  OnInit,
  OnDestroy,
  Renderer2,
  HostBinding
} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {Login} from "@/Models/login";
import {AccountService} from "@services/account.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  @HostBinding('class') class = 'login-box';
  public isAuthLoading = false;
  model: Login ={userName:"",password:""};

  constructor(
    private renderer: Renderer2,
    private toastr: ToastrService,
    private accountService: AccountService, private router: Router) {  }

  ngOnInit() {
    this.renderer.addClass(
      document.querySelector('app-root'),
      'login-page'
    );
  }

  async login(){
    this.accountService.login(this.model).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/']);
      },
      error => this.toastr.error(error.error.error[0])
    )
  }

  ngOnDestroy() {
    this.renderer.removeClass(
      document.querySelector('app-root'),
      'login-page'
    );
  }
}
