import { Category } from "../../../../app/types/category";

export interface CategoryListSchema {
  data: Category[] | null;
  isLoading: boolean;
  error: string | undefined;
}
