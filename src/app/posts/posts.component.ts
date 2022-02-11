import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {PostServiceService} from "src/app/service/post-service.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(private postService:PostServiceService, private activatedRoute:ActivatedRoute) { }

  PostList:any;
  commentID:any;

  sendID(i:any){
    this.postService.GetCommentID(i.id);
  }

  isSelected(item:any){
    return parseInt(item.id)===parseInt(this.commentID);
  }

  ngOnInit(): void {
    this.postService.GetAllPostsJson().subscribe(postData=>{
      this.PostList=postData;
    });
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
      this.commentID=params.get("id");
    })
  }
}
