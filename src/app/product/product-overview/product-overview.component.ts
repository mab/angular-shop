import { Component, OnInit } from '@angular/core';
import { Product } from '../product.types';
import { ProductService } from '../product-service/product.service';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.css']
})
export class ProductOverviewComponent implements OnInit {

  products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts()
      .catch(err => {
        console.error(err);
        return [];
      })
      .subscribe(data => this.products = data);
  }

}
