import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchDiscountProductListThunk } from "../services/fetchDiscountProductListThunk";
import { SpecialProductListSchema } from "../types/specialProductList";
import { Product } from "../../../../app/types/product";

const initialState: SpecialProductListSchema = {
  data: null,
  isLoading: false,
  error: undefined,
};

export const discountProductListSlice = createSlice({
  name: "discountProductList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDiscountProductListThunk.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(
        fetchDiscountProductListThunk.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.isLoading = false;
          state.data = action.payload;
        }
      )
      .addCase(fetchDiscountProductListThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {
  actions: discountProductListActions,
  reducer: discountProductListReducer,
} = discountProductListSlice;
