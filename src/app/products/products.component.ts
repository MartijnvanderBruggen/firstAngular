import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products;
  faCartPlus;
  constructor( private apiService: ApiService ) { }

  ngOnInit() {
    this.apiService.getProducts().subscribe((data) => {
      this.products = data;
      this.faCartPlus = faCartPlus;
    });
  }

}
