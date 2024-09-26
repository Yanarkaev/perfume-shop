import {
  configureStore,
  ThunkAction,
  Action,
  ThunkDispatch,
} from "@reduxjs/toolkit";
import { productListReducer } from "../../../entities/Product/model/slice/productListSlice";
import { StateSchema, ThunkExtraArg } from "./config";
import { hitsProductListReducer } from "../../../widgets/MainPageProductList/model/slice/hitsProductListSlice";
import { newsProductListReducer } from "../../../widgets/MainPageProductList/model/slice/newsProductListSlice";
import { discountProductListReducer } from "../../../widgets/MainPageProductList/model/slice/discountProductListSlice";

export const store = configureStore({
  reducer: {
    productList: productListReducer,
    hitsProductList: hitsProductListReducer,
    newsProductList: newsProductListReducer,
    discountProductList: discountProductListReducer
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
