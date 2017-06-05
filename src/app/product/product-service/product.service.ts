import {Injectable} from '@angular/core';
import {Product, ProductRestResponse} from '../product.types';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class ProductService {
  private static readonly PRODUCTS_ENDPOINT = '/api/rest/products';
  private static readonly PRODUCT_BY_ID_ENDPOINT = (id: string) => `/api/rest/products/${id}`;

  private static restProductToProduct(restProduct: ProductRestResponse): Product {
    return {
      id: restProduct._links.self.href.split('/').splice(-1)[0],
      name: restProduct.name,
      description: restProduct.description,
      image: restProduct.imageUrl,
      price: restProduct.price,
    }
  }

  constructor(private http: Http) {
  }

  getProducts(): Observable<Product[]> {
    return this.http.get(ProductService.PRODUCTS_ENDPOINT)
      .map(response => response.json())
      .map(json => json._embedded.products as ProductRestResponse[])
      .map(restProducts => restProducts.map(ProductService.restProductToProduct));
  }

  getProductById(id: string): Observable<Product> {
    return this.http.get(ProductService.PRODUCT_BY_ID_ENDPOINT(id))
      .map(response => response.json() as ProductRestResponse)
      .map(ProductService.restProductToProduct);
  }
}
