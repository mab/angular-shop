import { Component, OnInit } from '@angular/core';
import { Product } from '../product.types';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product-service/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product;

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    const productId = this.route.snapshot.params['id'];
    this.product = this.productService.getProductById(productId);
  }

}
