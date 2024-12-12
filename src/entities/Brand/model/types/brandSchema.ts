import { Brand } from './../../../../app/types/brand';

export interface BrandListSchema {
  data: Brand[] | null;
  isLoading: boolean;
  error: string | undefined;
}
