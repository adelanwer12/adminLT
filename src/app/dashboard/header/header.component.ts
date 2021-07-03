import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {User} from "@/Models/user";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggleMenuSidebar: EventEmitter<any> = new EventEmitter<any>();
  public searchForm: FormGroup;
  @Input() userFromHome: User;


  constructor() {
  }

  ngOnInit() {
    this.searchForm = new FormGroup({
      search: new FormControl(null)
    });
  }

  logout() {

  }
}
