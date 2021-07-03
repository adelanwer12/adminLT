import {Component, Input, OnInit} from '@angular/core';
import {User} from "@/Models/user";
import {AccountService} from "@services/account.service";

@Component({
  selector: 'app-menu-sidebar',
  templateUrl: './menu-sidebar.component.html',
  styleUrls: ['./menu-sidebar.component.scss']
})
export class MenuSidebarComponent implements OnInit {
  @Input() userFromHome: User;

  constructor() {
  }

  ngOnInit() {

  }


}
