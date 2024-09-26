import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchHitsProductListThunk } from "../services/fetchHitsProductListThunk";
import { SpecialProductListSchema } from "../types/specialProductList";
import { Product } from "../../../../app/types/product";

const initialState: SpecialProductListSchema = {
  data: null,
  isLoading: false,
  error: undefined,
};

export const hitsProductListSlice = createSlice({
  name: "hitsProductList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHitsProductListThunk.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(
        fetchHitsProductListThunk.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.isLoading = false;
          state.data = action.payload;
        }
      )
      .addCase(fetchHitsProductListThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {
  actions: hitsProductListActions,
  reducer: hitsProductListReducer,
} = hitsProductListSlice;
