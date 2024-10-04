import { Product } from "../../../../app/types/product";

export interface ProductListData {
  total: number;
  currentPage: number;
  perPage: number;
  totalPages: number;
  list: Product[];
}

export interface ProductListFilters {
  name?: string;
  categoryIds?: string[];
  priceMin?: number;
  priceMax?: number;
  brandId?: string;
}

export interface ProductListSchema {
  data: ProductListData | null;
  isLoading: boolean;
  error: string | undefined;
  page: number;
  limit: number;
  filters: ProductListFilters;
}
