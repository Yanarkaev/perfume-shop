import { BrandListSchema } from "../../../entities/Brand/model/types/brandSchema";
import { CartSchema } from "../../../entities/Cart/model/types/cartShema";
import { CategoryListSchema } from "../../../entities/Category/model/types/categorySchema";
import { OrderSchema } from "../../../entities/Order/model/types/orderSchema";
import { SearchProductSchema } from "../../../features/SearchProduct/model/types/searchProductSchema";
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
  cart: CartSchema;
  productById: ProductByIdSchema;
  order: OrderSchema;
  searchProduct: SearchProductSchema;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
