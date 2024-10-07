import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchProductByIdThunk } from "../services/fetchProductByIdThunk";
import { Product } from "../../../../app/types/product";
import { ProductByIdSchema } from "../types/productByIdSchema";

const initialState: ProductByIdSchema = {
  data: null,
  isLoading: false,
  error: undefined,
};

export const productByIdSlice = createSlice({
  name: "productById",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductByIdThunk.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(
        fetchProductByIdThunk.fulfilled,
        (state, action: PayloadAction<Product>) => {
          state.isLoading = false;
          state.data = action.payload;
        }
      )
      .addCase(fetchProductByIdThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: productByIdActions, reducer: productByIdReducer } =
  productByIdSlice;
