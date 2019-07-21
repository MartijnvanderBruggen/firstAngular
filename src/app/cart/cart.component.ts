import { Component, OnInit } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {
  faShoppingCart;

  constructor() {
    this.faShoppingCart = faShoppingCart;
  }

  ngOnInit() {
  }

}
