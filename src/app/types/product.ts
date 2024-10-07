import { Brand } from "./brand";
import { Category } from "./category";

export interface Product {
  _id: string;
  brand: Brand;
  name: string;
  price: number;
  description: string;
  raiting?: number;
  discount: number;
  is_hit?: boolean;
  is_new?: boolean;
  imageURL?: string;
  categories: Category[];
  mlsLeft: number;
}
