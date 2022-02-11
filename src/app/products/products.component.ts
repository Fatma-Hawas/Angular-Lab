import { Component, OnInit } from '@angular/core';
import * as DiscountOffers from "src/app/sharedClassesAndTypes/DiscountOffers ";
import {IProduct} from "src/app/sharedClassesAndTypes/IProduct";
import {ICategory} from "src/app/sharedClassesAndTypes/ICategory";
import {ProductServiceService} from "src/app/service/product-service.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private productService:ProductServiceService, private router:Router, private activatedRouter:ActivatedRoute) {}

  Discount=DiscountOffers.DiscountOffers.DiscountOffers2;
  ProductList:IProduct[]=[{ID:1, Name:"IPhone", Quantity:23, Price:88, Img:"..//src/assets/iphone.jpg"},
  {ID:2, Name:"Laptop", Quantity:10, Price:15, Img:"..//src/assets/lap.jpg"},
  {ID:3, Name:"Camera", Quantity:9, Price:7, Img:"..//src/assets/camera.png"}];
  CategoryList:ICategory={ID:1, Name:"Phones"};
  ClientName:string="Ahmed";
  IsPurshased:Boolean=true;
  productServiceList:any;

  purshased(){
    if(this.IsPurshased){
      this.IsPurshased = false;
    }
    else
    this.IsPurshased = true;
  }

  renderValues(){
    this.productServiceList=this.productService.GetAllProducts();
    console.log(this.productService.GetProductById(1));
  }

  goToDiscount(){
    this.router.navigate(["discount"],{relativeTo:this.activatedRouter})
  }

  goToNoDiscount(){
    this.router.navigate(["noDiscount"],{relativeTo:this.activatedRouter})
  }

  ngOnInit(): void {
  }
}