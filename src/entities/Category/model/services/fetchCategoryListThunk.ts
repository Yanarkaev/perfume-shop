import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "../../../../app/providers/storeProvider/config";
import { getCategoryList } from "../../../../shared/api/routes";
import { Category } from "../../../../app/types/category";

export const fetchCategoryListThunk = createAsyncThunk<
  Category[],
  undefined,
  ThunkConfig<string>
>("categoryList/fetch", async (_, thunkApi) => {
  try {
    const response = await getCategoryList();
    return response.data;
  } catch (error) {
    console.log(error);
    return thunkApi.rejectWithValue(error as string);
  }
});
