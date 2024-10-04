import { Product } from "../../../../app/types/product";

import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "../../../../app/providers/storeProvider/config";
import { getDiscountProductList } from "../../../../shared/api/routes";

export const fetchDiscountProductListThunk = createAsyncThunk<
  Product[],
  undefined,
  ThunkConfig<string>
>("discountProductList/fetch", async (_, thunkApi) => {
  try {
    const response = await getDiscountProductList();
    return response.data;
  } catch (error) {
    console.log(error);
    return thunkApi.rejectWithValue(error as string);
  }
});
