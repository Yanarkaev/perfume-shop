import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchNewsProductListThunk } from "../services/fetchNewsProductListThunk";
import { SpecialProductListSchema } from "../types/specialProductList";
import { Product } from "../../../../app/types/product";

const initialState: SpecialProductListSchema = {
  data: null,
  isLoading: false,
  error: undefined,
};

export const newsProductListSlice = createSlice({
  name: "newsProductList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNewsProductListThunk.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(
        fetchNewsProductListThunk.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.isLoading = false;
          state.data = action.payload;
        }
      )
      .addCase(fetchNewsProductListThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {
  actions: newsProductListActions,
  reducer: newsProductListReducer,
} = newsProductListSlice;
