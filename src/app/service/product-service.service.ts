import { Injectable } from '@angular/core';
import {IProduct} from "src/app/sharedClassesAndTypes/IProduct";

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor() { }

  ProductList:IProduct[]=[{ID:1, Name:"IPhone", Quantity:23, Price:88, Img:"..//src/assets/iphone.jpg"},
    {ID:2, Name:"Laptop", Quantity:10, Price:15, Img:"..//src/assets/lap.jpg"},
    {ID:3, Name:"Camera", Quantity:9, Price:7, Img:"..//src/assets/camera.png"}
  ];

  GetAllProducts(){
    return this.ProductList;
  }

  GetProductById(prdId:number):any{
    for(let item of this.ProductList){
      if(item.ID === prdId){
        return item;
      }
      else return null;
    }
  }

}
