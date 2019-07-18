import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Product } from "./product";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products;
  constructor( private apiService: ApiService ) { }

  ngOnInit() {
    this.apiService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

}
