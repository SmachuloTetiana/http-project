import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  list_users;

  constructor(private userService: UserService) { }

  ngOnInit() {
    // this.list_users = this.userService.getAllUsers();

    this.userService.getAllUsers().subscribe(users => this.list_users = users)
  }

}
