import { StateSchema } from "../../../../app/providers/storeProvider/config";

export const getDiscountProductListSelector = (state: StateSchema) =>
  state.discountProductList;

export const getHitsProductListSelector = (state: StateSchema) =>
  state.hitsProductList;

export const getNewsProductListSelector = (state: StateSchema) =>
  state.newsProductList;
