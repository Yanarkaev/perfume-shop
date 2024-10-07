import { Brand } from "../../../../app/types/brand";
import { Category } from "../../../../app/types/category";

export interface BrandListSchema {
  data: Brand[] | null;
  isLoading: boolean;
  error: string | undefined;
}

export interface CategoryListSchema {
  data: Category[] | null;
  isLoading: boolean;
  error: string | undefined;
}
