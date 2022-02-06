import { Component, ViewChild } from '@angular/core';
import {ProductsComponent} from "../app/products/products.component";

@Component({
  selector: 'myfirstapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(ProductsComponent) child?:ProductsComponent;

  IsPurshased:Boolean=false;
  ProductList:any;

  renderValues(){
    this.child?.renderValues();
    if(this.IsPurshased){
      this.IsPurshased = false;
    }
    else
    this.IsPurshased = true;
    this.ProductList=this.child?.ProductList;
  }
}
