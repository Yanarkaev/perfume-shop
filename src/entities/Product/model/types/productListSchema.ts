import { Product } from "../../../../app/types/product";

export interface ProductListData {
  total: number;
  currentPage: number;
  perPage: number;
  totalPages: number;
  list: Product[];
}

export interface ProductListSchema {
  data: ProductListData | null;
  isLoading: boolean;
  error: string | undefined;
}
