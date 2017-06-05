import { Injectable } from '@angular/core';
import { Product } from '../product.types';
import { PRODUCTS } from './products.mock';

@Injectable()
export class ProductService {

  constructor() { }

  getProducts(): Product[] {
    return PRODUCTS;
  }

}
