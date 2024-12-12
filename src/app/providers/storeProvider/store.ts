import {
  configureStore,
  ThunkAction,
  Action,
  ThunkDispatch,
} from "@reduxjs/toolkit";
import { productListReducer } from "../../../pages/ProductListPage/model/slice/productListSlice";
import { StateSchema, ThunkExtraArg } from "./config";
import { hitsProductListReducer } from "../../../pages/MainPage/model/slice/hitsProductListSlice";
import { newsProductListReducer } from "../../../pages/MainPage/model/slice/newsProductListSlice";
import { discountProductListReducer } from "../../../pages/MainPage/model/slice/discountProductListSlice";
import { cartReducer } from "../../../entities/Cart/model/slice/cartSlice";
import { productByIdReducer } from "../../../pages/ProductPage/model/slice/productByIdSlice";
import { categoryListReducer } from "../../../entities/Category/model/slice/categoryListSlice";
import { brandListReducer } from "../../../entities/Brand/model/slice/brandListSlice";
import { orderReducer } from "../../../entities/Order/model/slice/orderSlice";

export const store = configureStore({
  reducer: {
    productList: productListReducer,
    hitsProductList: hitsProductListReducer,
    newsProductList: newsProductListReducer,
    discountProductList: discountProductListReducer,
    categoryList: categoryListReducer,
    brandList: brandListReducer,
    cart: cartReducer,
    productById: productByIdReducer,
    order: orderReducer
  },
});

// export type AppDispatch = typeof store.dispatch;
export type AppDispatch = ThunkDispatch<StateSchema, ThunkExtraArg, Action>;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  ThunkExtraArg,
  Action<string>
>;
