import {Href, ID, URI} from '../common.types';
export interface Product {
  id: ID;
  name: string;
  description: string;
  image: URI;
  price: number;

}

export interface ProductRestResponse {
  name: string,
  description: string,
  imageUrl: URI,
  price: number,
  _links: {
    self: Href,
    product: Href,
    productCategories: Array<Href>,
    categories: Href
  }
}
