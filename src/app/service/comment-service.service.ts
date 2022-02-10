import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IComment} from "src/app/sharedClassesAndTypes/IComment";
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentServiceService {

  constructor(private http:HttpClient) { }
  
  _url:string="https://jsonplaceholder.typicode.com/posts/";
  GetAllCommentsJson(id:any):Observable<IComment[]>{
    return this.http.get<IComment[]>(this._url+id+"/comments").pipe(catchError((err)=>{
      return throwError(()=>err.message||"Server error")
    }));
  }
  
}