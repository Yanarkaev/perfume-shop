import { Product } from "../../../../app/types/product";

export interface ProductByIdSchema {
  data: Product | null;
  isLoading: boolean;
  error: string | undefined;
}
