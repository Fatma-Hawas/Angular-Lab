import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CommentServiceService} from "src/app/service/comment-service.service";
import {PostServiceService} from '../service/post-service.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  constructor(private commentService:CommentServiceService, private postService:PostServiceService, private router:Router) { }

  CommentList:any;
  CommentID?:number;

  ngOnInit(): void {
    this.CommentID = this.postService.SetCommentID();
    this.commentService.GetAllCommentsJson(this.CommentID).subscribe(commentData=>{
      this.CommentList=commentData;
    })
  }

  goToPosts(){
    this.router.navigate(["/posts",{id:this.CommentID}])
  }

}
