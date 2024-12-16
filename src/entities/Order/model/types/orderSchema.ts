import { Order } from "../../../../app/types/order";

export interface OrderSchema {
  data: Order[] | null;
  isLoading: boolean;
  isSuccessOrder: boolean;
  error?: string;
}
