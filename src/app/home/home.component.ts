import { Component, OnInit } from '@angular/core';
import {IProduct} from "src/app/sharedClassesAndTypes/IProduct";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  name:string="Fatma Hawas";
  IsPurshased:Boolean=false;
  ProductList:IProduct[]=[{ID:1, Name:"IPhone", Quantity:23, Price:88, Img:"..//src/assets/iphone.jpg"},
  {ID:2, Name:"Laptop", Quantity:10, Price:15, Img:"..//src/assets/lap.jpg"},
  {ID:3, Name:"Camera", Quantity:9, Price:7, Img:"..//src/assets/camera.png"}];

  renderValues(){
    if(this.IsPurshased){
      this.IsPurshased = false;
    }
    else
    this.IsPurshased = true;
  }

  ngOnInit(): void {
  }

}