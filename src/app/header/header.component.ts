import { Component, OnInit } from '@angular/core';
import {ICategory} from "src/app/sharedClassesAndTypes/ICategory";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  name:string="Fatma Hawas";

  CategoryList1:ICategory={ID:1, Name:"Phones"};
  CategoryList2:ICategory={ID:2, Name:"Laptops"};

  Category=[this.CategoryList1.Name,this.CategoryList2.Name];

  ngOnInit(): void {
  }

}
