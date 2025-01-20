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
  limit?: number;
  page?: number;
}

export interface Pagination {
  page?: number;
  limit?: number;
}

export interface ProductListSchema {
  data: ProductListData | null;
  isLoading: boolean;
  error: string | undefined;
  pagination: Pagination;
  filters: ProductListFilters;
  searchValue: string;
}
