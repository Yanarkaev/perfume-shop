import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BrandListSchema } from "../types/filterSchema";
import { fetchBrandListThunk } from "../services/fetchBrandListThunk";
import { Brand } from "../../../../app/types/brand";

const initialState: BrandListSchema = {
  data: null,
  isLoading: false,
  error: undefined,
};

export const brandListSlice = createSlice({
  name: "brandList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBrandListThunk.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(
        fetchBrandListThunk.fulfilled,
        (state, action: PayloadAction<Brand[]>) => {
          state.isLoading = false;
          state.data = action.payload;
        }
      )
      .addCase(fetchBrandListThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: brandListActions, reducer: brandListReducer } =
  brandListSlice;
