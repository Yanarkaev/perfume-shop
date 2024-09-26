import { SpecialProductListSchema } from "../../../widgets/MainPageProductList/model/types/specialProductList";
import { ProductListSchema } from "./../../../entities/Product/model/types/productListSchema";
import { AxiosInstance } from "axios";

export interface StateSchema {
  productList: ProductListSchema;
  hitsProductList: SpecialProductListSchema;
  newsProductList: SpecialProductListSchema;
  discountProductList: SpecialProductListSchema;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
