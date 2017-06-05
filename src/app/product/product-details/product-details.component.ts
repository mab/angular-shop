import {Component, OnInit} from '@angular/core';
import {Product} from '../product.types';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../product-service/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product;

  constructor(private route: ActivatedRoute, private productService: ProductService) {
  }

  ngOnInit() {
    const productId = this.route.snapshot.params['id'];
    this.productService.getProductById(productId)
      .catch(err => {
        console.error(err);
        return [];
      })
      .subscribe(product => this.product = product);
  }

}
