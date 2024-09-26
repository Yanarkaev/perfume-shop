import { ProductListData } from './../types/productListSchema';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "../../../../app/providers/storeProvider/config";
import { getProductList } from "../../../../shared/api/routes";

export const fetchProductListThunk = createAsyncThunk<
  ProductListData,
  undefined,
  ThunkConfig<string>
>("productList/fetch", async (_, thunkApi) => {

  try {
    const response = await getProductList();
    return response.data;
  } catch (error) {
    console.log(error);
    return thunkApi.rejectWithValue(error as string);
  }
});
