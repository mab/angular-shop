import { ID, URI } from '../common.types';
export interface Product {
  id: ID;
  name: string;
  description: string;
  image: URI;
  price: number;

}
