import { Product } from "../../../../app/types/product";

import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "../../../../app/providers/storeProvider/config";
import { getHitsProductList } from "../../../../shared/api/routes";

export const fetchHitsProductListThunk = createAsyncThunk<
  Product[],
  undefined,
  ThunkConfig<string>
>("hitsProductList/fetch", async (_, thunkApi) => {
  try {
    const response = await getHitsProductList();
    return response.data;
  } catch (error) {
    console.log(error);
    return thunkApi.rejectWithValue(error as string);
  }
});
