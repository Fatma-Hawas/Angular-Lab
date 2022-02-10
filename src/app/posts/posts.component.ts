import { Component, OnInit } from '@angular/core';
import {PostServiceService} from "src/app/service/post-service.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(private postService:PostServiceService) { }

  PostList:any;

  sendID(i:any){
    this.postService.GetCommentID(i.id);
  }

  ngOnInit(): void {
    this.postService.GetAllPostsJson().subscribe(postData=>{
      this.PostList=postData;
    });
  }
}
