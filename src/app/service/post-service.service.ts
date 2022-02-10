import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IPost} from "src/app/sharedClassesAndTypes/IPost";
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  constructor(private http:HttpClient) { }

  _url:string="https://jsonplaceholder.typicode.com/posts";
  GetAllPostsJson():Observable<IPost[]>{
    return this.http.get<IPost[]>(this._url).pipe(catchError((err)=>{
      return throwError(()=>err.message||"Server error")
    }));
  }

  commentID?:number;
  GetCommentID(id:number){
    this.commentID = id;
  }
  SetCommentID(){
    return this.commentID;
  }

}