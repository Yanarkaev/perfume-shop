import { Product } from "../../../../app/types/product";

export interface CartProduct extends Product {
  count: number;
}

export interface CartSchema {
  data: {
    cartData: CartProduct[];
    totalValue: number;
  };
  totalSum: number;
  isLoading: boolean;
  error: string | undefined;
}
