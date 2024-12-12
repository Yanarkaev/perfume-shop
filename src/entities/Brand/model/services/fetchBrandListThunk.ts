import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "../../../../app/providers/storeProvider/config";
import { getBrandList } from "../../../../shared/api/routes";
import { Brand } from "../../../../app/types/brand";

export const fetchBrandListThunk = createAsyncThunk<
  Brand[],
  undefined,
  ThunkConfig<string>
>("brandList/fetch", async (_, thunkApi) => {
  try {
    const response = await getBrandList();
    return response.data;
  } catch (error) {
    console.log(error);
    return thunkApi.rejectWithValue(error as string);
  }
});