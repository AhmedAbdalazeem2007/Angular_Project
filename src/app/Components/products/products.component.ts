import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IProduct } from '../../Models/iproduct';
import { NgFor, NgIf, NgSwitch } from '@angular/common';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    NgSwitch,



  ]
  ,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  public title: string = "hello product";
  description: string = "hell";
  productlist: IProduct[];
  ordertotalprice: number = 90;
  constructor() {
    this.productlist = [
      { id: 1, name: "jj", price: 433, categoryId: 32, imgeUrl: "kjj" },
      { id: 2, name: "jj", price: 433, categoryId: 32, imgeUrl: "kjj" },
      { id: 3, name: "jjfsddf", price: 433, categoryId: 32, imgeUrl: "kjj" },
    ];
  }

  buy(id: number, count: any) {
    let itemcount: number = parseInt(count);

  }

  producttrackby(i: number, prod: IProduct) {

  }


}
