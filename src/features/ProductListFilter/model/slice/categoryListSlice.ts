import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CategoryListSchema } from "../types/filterSchema";
import { fetchCategoryListThunk } from "../services/fetchCategoryListThunk";
import { Category } from "../../../../app/types/category";

const initialState: CategoryListSchema = {
  data: null,
  isLoading: false,
  error: undefined,
};

export const categoryListSlice = createSlice({
  name: "categoryList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoryListThunk.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(
        fetchCategoryListThunk.fulfilled,
        (state, action: PayloadAction<Category[]>) => {
          state.isLoading = false;
          state.data = action.payload;
        }
      )
      .addCase(fetchCategoryListThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: categoryListActions, reducer: categoryListReducer } =
  categoryListSlice;
