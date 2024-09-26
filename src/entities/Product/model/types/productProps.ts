
export interface Product {
  brand: string;
  name: string;
  price: number;
  variant?: "default";
  discount?: number;
  is_hit?: boolean;
  is_new?: boolean;
  img: string;
}
