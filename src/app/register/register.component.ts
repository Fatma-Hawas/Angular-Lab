import { Component, OnInit } from '@angular/core';
import {User} from "../sharedClassesAndTypes/user";
import {EnrollmentService} from "./../service/enrollment.service";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmPasswordValidator } from './../sharedClassesAndTypes/ConfirmPassword.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private enrollment:EnrollmentService, private fb:FormBuilder) { }
  //userModel:User=new User("","","","","");

  registrationForm = this.fb.group({
    usernameCon:["", [Validators.required, Validators.pattern("[a-zA-Z ]+")]],
    emailCon:["", [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]],
    passwordCon:["", Validators.required],
    conpasswordCon:["", Validators.required],
    hearaboutCon:["", Validators.required]
  },{validator:[ConfirmPasswordValidator]}
  );
  get usernameCon(){
    return this.registrationForm.get("usernameCon");
  }
  get emailCon(){
    return this.registrationForm.get("emailCon");
  }
  get passwordCon(){
    return this.registrationForm.get("passwordCon");
  }
  get conpasswordCon(){
    return this.registrationForm.get("conpasswordCon");
  }
  get hearaboutCon(){
    return this.registrationForm.get("hearaboutCon");
  }

  ngOnInit(): void {
    //this.enrollment.GetUser(this.userModel);
  }

  // onSubmit(){
  //   console.log(this.userModel);
  //   this.enrollment.enroll(this.userModel).subscribe(res=>{
  //     console.log("success",res);
  //   },error=>{
  //     console.log("error",error);
  //   })
  // }

}