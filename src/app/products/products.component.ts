import { Component, OnInit } from '@angular/core';
import * as DiscountOffers from "src/app/sharedClassesAndTypes/DiscountOffers ";
import {IProduct} from "src/app/sharedClassesAndTypes/IProduct"
import {ICategory} from "src/app/sharedClassesAndTypes/ICategory"

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  Discount=DiscountOffers.DiscountOffers.DiscountOffers2;
  StoreName:string="Fatma Store";
  StoreLogo:string="..//src/assets/img.jpg";
  ProductList:IProduct={ID:1, Name:"IPhone", Quantity:23, Price:88, Img:"..//src/assets/iphone.jpg"};
  CategoryList:ICategory={ID:1, Name:"Phones"};
  ClientName:string="Ahmed";
  IsPurshased:Boolean=true;

  ngOnInit(): void {
  }

}
