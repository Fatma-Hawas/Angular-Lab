import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProductsComponent} from './products/products.component';
import {UsersComponent} from "./users/users.component";
import {PostsComponent} from "./posts/posts.component";
import {CommentComponent} from "./comment/comment.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

const routes: Routes = [
  {path:"",component:HomeComponent,pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"products",component:ProductsComponent},
  {path:"users",component:UsersComponent},
  {path:"posts",component:PostsComponent},
  {path:"comments",component:CommentComponent},
  {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
