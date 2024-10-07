import { CartSchema } from "../../../entities/Cart/model/types/cartShema";
import {
  BrandListSchema,
  CategoryListSchema,
} from "../../../features/ProductListFilter/model/types/filterSchema";
import { SpecialProductListSchema } from "../../../pages/MainPage/model/types/specialProductList";
import { ProductByIdSchema } from "../../../pages/ProductPage/model/types/productByIdSchema";
import { ProductListSchema } from "./../../../pages/ProductListPage/model/types/productListSchema";
import { AxiosInstance } from "axios";

export interface StateSchema {
  productList: ProductListSchema;
  hitsProductList: SpecialProductListSchema;
  newsProductList: SpecialProductListSchema;
  discountProductList: SpecialProductListSchema;
  brandList: BrandListSchema;
  categoryList: CategoryListSchema;
  cart: CartSchema
  productById: ProductByIdSchema
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
