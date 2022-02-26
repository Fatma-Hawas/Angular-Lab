import { Component, OnInit } from '@angular/core';
import {UserLogin} from "../sharedClassesAndTypes/user-login";
import {EnrollmentService} from "../service/enrollment.service";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private enrollment:EnrollmentService, private fb:FormBuilder) { }

  // userModel:UserLogin=new UserLogin("","");
  // userValid="";

  registrationForm = this.fb.group({
    emailCon:["", [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]],
    passwordCon:["", Validators.required]
  });
  get emailCon(){
    return this.registrationForm.get("emailCon");
  }
  get passwordCon(){
    return this.registrationForm.get("passwordCon");
  }

  ngOnInit(): void {
  }

  // login(){
  //   const userInfo=this.enrollment.SetUser();
  //   console.log(userInfo);
  //   if(this.userModel.email===userInfo.email && this.userModel.password===userInfo.password){
  //     this.userValid=userInfo.username;
  //   }
  //   else this.userValid="";
  // }

}
