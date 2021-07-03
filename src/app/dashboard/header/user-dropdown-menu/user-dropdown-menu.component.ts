import {
  Component,
  OnInit,
  ViewChild,
  HostListener,
  ElementRef,
  Renderer2, Input
} from '@angular/core';
import {DateTime} from 'luxon';
import {AccountService} from "@services/account.service";
import {User} from "@/Models/user";

@Component({
    selector: 'app-user-dropdown-menu',
    templateUrl: './user-dropdown-menu.component.html',
    styleUrls: ['./user-dropdown-menu.component.scss']
})
export class UserDropdownMenuComponent implements OnInit {
    @Input() userFromHeader : User

    @ViewChild('dropdownMenu', {static: false}) dropdownMenu;
    @HostListener('document:click', ['$event'])
    clickout(event) {
        if (!this.elementRef.nativeElement.contains(event.target)) {
            this.hideDropdownMenu();
        }
    }

    constructor(
        private elementRef: ElementRef,
        private renderer: Renderer2,
        private accountService: AccountService
    ) {}

    ngOnInit(): void {
    }

    toggleDropdownMenu() {
        if (this.dropdownMenu.nativeElement.classList.contains('show')) {
            this.hideDropdownMenu();
        } else {
            this.showDropdownMenu();
        }
    }

    showDropdownMenu() {
        this.renderer.addClass(this.dropdownMenu.nativeElement, 'show');
    }

    hideDropdownMenu() {
        this.renderer.removeClass(this.dropdownMenu.nativeElement, 'show');
    }

    logout() {
        this.accountService.logout();
    }

    formatDate(date) {
        return DateTime.fromISO(date).toFormat('dd LLL yyyy');
    }
}
