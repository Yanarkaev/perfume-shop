import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "../../../../app/providers/storeProvider/config";
import { getProductNames } from "../../../../shared/api/routes";

export const fetchProductNamesThunk = createAsyncThunk<
  string[],
  undefined,
  ThunkConfig<string>
>("productNames/fetch", async (_, thunkApi) => {
  try {
    const response = await getProductNames();
    return response.data;
  } catch (error) {
    console.log(error);
    return thunkApi.rejectWithValue(error as string);
  }
});
