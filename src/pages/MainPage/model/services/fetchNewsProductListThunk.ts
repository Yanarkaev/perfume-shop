import { Product } from "../../../../app/types/product";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "../../../../app/providers/storeProvider/config";
import { getNewsProductList } from "../../../../shared/api/routes";

export const fetchNewsProductListThunk = createAsyncThunk<
  Product[],
  undefined,
  ThunkConfig<string>
>("newsProductList/fetch", async (_, thunkApi) => {
  try {
    const response = await getNewsProductList();
    return response.data;
  } catch (error) {
    console.log(error);
    return thunkApi.rejectWithValue(error as string);
  }
});
