import { Component, OnInit } from '@angular/core';
import {User} from "../sharedClassesAndTypes/user";
import {EnrollmentService} from "./../service/enrollment.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private enrollment:EnrollmentService) { }
  userModel:User=new User("","","","","");

  ngOnInit(): void {
    this.enrollment.GetUser(this.userModel);
  }

  onSubmit(){
    console.log(this.userModel);
    this.enrollment.enroll(this.userModel).subscribe(res=>{
      console.log("success",res);
    },error=>{
      console.log("error",error);
    })
  }

}