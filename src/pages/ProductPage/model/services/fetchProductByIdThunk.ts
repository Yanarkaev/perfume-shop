import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "../../../../app/providers/storeProvider/config";
import { getProductById } from "../../../../shared/api/routes";
import { Product } from "../../../../app/types/product";

export const fetchProductByIdThunk = createAsyncThunk<
  Product,
  string,
  ThunkConfig<string>
>("productById/fetch", async (id, thunkApi) => {
  try {
    const response = await getProductById(id);
    return response.data;
  } catch (error) {
    console.log(error);
    return thunkApi.rejectWithValue(error as string);
  }
});