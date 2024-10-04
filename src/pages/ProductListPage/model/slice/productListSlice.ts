import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  ProductListData,
  ProductListFilters,
  ProductListSchema,
} from "../types/productListSchema";
import { fetchProductListThunk } from "../services/fetchProductListThunk";

const initialState: ProductListSchema = {
  data: null,
  isLoading: false,
  error: undefined,
  page: 1,
  limit: 15,
  filters: {},
};

export const productListSlice = createSlice({
  name: "productList",
  initialState,
  reducers: {
    setFilters(state, action: PayloadAction<ProductListFilters>) {
      state.filters = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductListThunk.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(
        fetchProductListThunk.fulfilled,
        (state, action: PayloadAction<ProductListData>) => {
          state.isLoading = false;
          state.data = action.payload;
        }
      )
      .addCase(fetchProductListThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: productListActions, reducer: productListReducer } =
  productListSlice;
