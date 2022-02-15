import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from "../sharedClassesAndTypes/user";

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  constructor(private http:HttpClient){}
  _url="http://localhost:3000/enroll";
  enroll(user:User){
    return this.http.post(this._url,user);
  }

  userInfo:any;
  GetUser(user:any){
    this.userInfo=user;
  }
  SetUser(){
    return this.userInfo;
  }
}
