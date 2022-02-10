import { Component, OnInit } from '@angular/core';
import {CommentServiceService} from "src/app/service/comment-service.service";
import {PostServiceService} from '../service/post-service.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  constructor(private commentService:CommentServiceService, private postService:PostServiceService) { }

  CommentList:any;
  CommentID?:number;

  ngOnInit(): void {
    this.CommentID = this.postService.SetCommentID();
    this.commentService.GetAllCommentsJson(this.CommentID).subscribe(commentData=>{
      this.CommentList=commentData;
    })
  }

}
