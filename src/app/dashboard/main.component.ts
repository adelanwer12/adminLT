import {Component, HostBinding, Input, OnInit, Renderer2} from '@angular/core';
import {User} from "@/Models/user";
import {AccountService} from "@services/account.service";

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
    @HostBinding('class') class = 'wrapper';
    public sidebarMenuOpened = true;
    public user:User;

    constructor(private renderer: Renderer2, private accountService: AccountService) {}

    ngOnInit() {
        this.renderer.removeClass(
            document.querySelector('app-root'),
            'login-page'
        );
        this.renderer.removeClass(
            document.querySelector('app-root'),
            'register-page'
        );
      this.getCurrentUser();
    }

    toggleMenuSidebar() {
        if (this.sidebarMenuOpened) {
            this.renderer.removeClass(
                document.querySelector('app-root'),
                'sidebar-open'
            );
            this.renderer.addClass(
                document.querySelector('app-root'),
                'sidebar-collapse'
            );
            this.sidebarMenuOpened = false;
        } else {
            this.renderer.removeClass(
                document.querySelector('app-root'),
                'sidebar-collapse'
            );
            this.renderer.addClass(
                document.querySelector('app-root'),
                'sidebar-open'
            );
            this.sidebarMenuOpened = true;
        }
    }

  getCurrentUser() {
    this.accountService.currentUser$.subscribe(
      response => {
        this.user = response;
      }
    )
  }
}
