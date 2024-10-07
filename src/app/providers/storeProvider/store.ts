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
import { categoryListReducer } from "../../../features/ProductListFilter/model/slice/categoryListSlice";
import { brandListReducer } from "../../../features/ProductListFilter/model/slice/brandListSlice";
import { cartReducer } from "../../../entities/Cart/model/slice/cartSlice";
import { productByIdReducer } from "../../../pages/ProductPage/model/slice/productByIdSlice";

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
