import { Injectable } from '@angular/core';
import { Product } from '../product.types';
import { PRODUCTS } from './products.mock';
import { ID } from '../../common.types';

@Injectable()
export class ProductService {

  constructor() { }

  getProducts(): Product[] {
    return PRODUCTS;
  }

  getProductById(id: string): Product {
    return PRODUCTS.filter(product => product.id === id)[0];
  }

}
