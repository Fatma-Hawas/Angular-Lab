import { Component, OnInit } from '@angular/core';
import {UserLogin} from "../sharedClassesAndTypes/user-login";
import {EnrollmentService} from "../service/enrollment.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private enrollment:EnrollmentService) { }

  userModel:UserLogin=new UserLogin("","");
  userValid="";

  ngOnInit(): void {
  }

  login(){
    const userInfo=this.enrollment.SetUser();
    console.log(userInfo);
    if(this.userModel.email===userInfo.email && this.userModel.password===userInfo.password){
      this.userValid=userInfo.username;
    }
    else this.userValid="";
  }

}
