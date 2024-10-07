import {
  BrandListSchema,
  CategoryListSchema,
} from "../../../features/ProductListFilter/model/types/filterSchema";
import { SpecialProductListSchema } from "../../../pages/MainPage/model/types/specialProductList";
import { ProductListSchema } from "./../../../pages/ProductListPage/model/types/productListSchema";
import { AxiosInstance } from "axios";

export interface StateSchema {
  productList: ProductListSchema;
  hitsProductList: SpecialProductListSchema;
  newsProductList: SpecialProductListSchema;
  discountProductList: SpecialProductListSchema;
  brandList: BrandListSchema;
  categoryList: CategoryListSchema;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
