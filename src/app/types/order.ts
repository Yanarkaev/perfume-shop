import { CartProduct } from "../../entities/Cart/model/types/cartShema";

export interface Order {
  cartData: CartProduct[];
  clientName: string;
  phoneNumber: string;
  city: string;
  address: string;
  total: number;
}
