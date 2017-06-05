import { Component, OnInit } from '@angular/core';
import { Product } from '../product.types';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.css']
})
export class ProductOverviewComponent implements OnInit {

  products: Product[]  = [{name: '1984'}, {name: 'Das Leben des Brian'}, {name: 'Pulp Fiction'}];

  constructor() { }

  ngOnInit() {
  }

}
