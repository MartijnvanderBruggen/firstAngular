import { Component, OnInit } from '@angular/core';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  faHome;
  faShoppingCart;

  constructor() { }

  ngOnInit() {
    this.faHome = faHome;
    this.faShoppingCart = faShoppingCart;
  }

}
