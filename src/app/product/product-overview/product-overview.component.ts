import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.css']
})
export class ProductOverviewComponent implements OnInit {

  products = ['1984', 'Das Leben des Brian', 'Pulp Fiction'];

  constructor() { }

  ngOnInit() {
  }

}
