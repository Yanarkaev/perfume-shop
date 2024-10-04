import {
  ProductListData,
  ProductListFilters,
} from "./../types/productListSchema";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "../../../../app/providers/storeProvider/config";
import { getProductList } from "../../../../shared/api/routes";

export const fetchProductListThunk = createAsyncThunk<
  ProductListData,
  ProductListFilters,
  ThunkConfig<string>
>("productList/fetch", async (args, thunkApi) => {
  try {
    const response = await getProductList(args);
    return response.data;
  } catch (error) {
    console.log(error);
    return thunkApi.rejectWithValue(error as string);
  }
});