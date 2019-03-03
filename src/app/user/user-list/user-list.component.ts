import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  list_users;
  servers = [
    {
      name: 'first'
    },
    {
      name: 'second'
    }
  ];

  constructor(private userService: UserService) { }

  ngOnInit() {
    // this.list_users = this.userService.getAllUsers();

    this.userService.getAllUsers().subscribe(users => this.list_users = users)
  }

  onPost() {
    this.userService.sendServers(this.servers).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }

  onGet() {
    this.userService.getServers().subscribe(
      (response) => console.log(response);
    );
  }
}
