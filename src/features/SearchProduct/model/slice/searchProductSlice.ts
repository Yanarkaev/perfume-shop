import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SearchProductSchema } from "../types/searchProductSchema";
import { fetchProductNamesThunk } from "../services/fetchProductNames";

const initialState: SearchProductSchema = {
  data: [],
  isLoading: false,
  error: undefined,
};

export const searchProductSlice = createSlice({
  name: "searchProduct",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductNamesThunk.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(
        fetchProductNamesThunk.fulfilled,
        (state, action: PayloadAction<string[]>) => {
          state.data = action.payload;
          state.isLoading = false;
        }
      )
      .addCase(fetchProductNamesThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: searchProductActions, reducer: searchProductReducer } =
  searchProductSlice;
