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
  priceMin?: string;
  priceMax?: string;
  brandIds?: string[];
}

export interface ProductListSchema {
  data: ProductListData | null;
  isLoading: boolean;
  error: string | undefined;
  page: number;
  limit: number;
  filters: ProductListFilters;
  searchValue: string
}
