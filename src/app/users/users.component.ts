import { Component, OnInit } from '@angular/core';
import {UserServiceService} from "src/app/service/user-service.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private userService:UserServiceService) { }

  UserList:any;

  ngOnInit(): void {
    this.userService.GetAllUsersJson().subscribe(userData=>{
      this.UserList=userData;
    })
  }

}
