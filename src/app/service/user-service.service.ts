import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IUser} from "src/app/sharedClassesAndTypes/IUser";
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }

  _url:string="https://jsonplaceholder.typicode.com/users";
  GetAllUsersJson():Observable<IUser[]>{
    return this.http.get<IUser[]>(this._url).pipe(catchError((err)=>{
      return throwError(()=>err.message||"Server error")
    }));
  }

}