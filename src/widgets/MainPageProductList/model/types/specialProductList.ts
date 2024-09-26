import { Product } from "../../../../app/types/product";

export interface SpecialProductListSchema {
  data: Product[] | null;
  isLoading: boolean;
  error: string | undefined;
}
