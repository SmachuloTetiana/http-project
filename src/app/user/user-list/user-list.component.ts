import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Response } from '@angular/http';  
import { Router } from "@angular/router";  
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Services } from '@angular/core/src/view';
import { Users } from '../../shared/users.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  list_users;
  items = [];
  servers = [
    {
      id: 1,
      name: 'First'
    },
    {
      id: 2,
      name: 'Second'
    }
  ];

  constructor(private userService: UserService) { }

  ngOnInit() {
    // this.list_users = this.userService.getAllUsers();

    this.items = this.userService.getUser();

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
      (response) => console.log(response)
    );
  }

  onAddItem(id: number, name: string) {
    this.userService.addUser({
      id,
      name
    })
  }

  onDelete(index: number): void {
    this.items.splice(index, 1);
  }

}
