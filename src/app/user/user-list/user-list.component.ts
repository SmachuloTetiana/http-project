import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserService } from '../user.service';
import { Response } from '@angular/http';  
import { Router } from "@angular/router";  
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Services } from '@angular/core/src/view';
import { Users } from '../../shared/users.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  list_users;
  name;
  signUpForm: FormGroup;
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
    this.signUpForm = new FormGroup({
      'input_id' : new FormControl(null, Validators.required),
      'input_name' : new FormControl(null, Validators.required)
    });

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

  onAddItem() {
    this.userService.addUser({
      id: this.signUpForm.value.input_id,
      name: this.signUpForm.value.input_name
    })
  }

  onDelete(i): void {
    this.userService.getDelete(i);
  }

  onEdit(id, name) {
   this.signUpForm.setValue({
      input_id: id,
      input_name: name
   });
  }

}
