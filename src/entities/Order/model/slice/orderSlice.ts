import { createSlice } from "@reduxjs/toolkit";
import { OrderSchema } from "../types/orderSchema";
import { createOrderThunk } from "../services/createOrderThunk";

const initialState: OrderSchema = {
  data: null,
  isSuccessOrder: false,
  isLoading: false,
  error: undefined,
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setIsSuccessOrder: (state, action) => {
      state.isSuccessOrder = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOrderThunk.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
        state.isSuccessOrder = false;
      })
      .addCase(createOrderThunk.fulfilled, (state) => {
        state.isSuccessOrder = true;
      })
      .addCase(createOrderThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccessOrder = false;
        state.error = action.payload;
      });
  },
});

export const { actions: orderActions, reducer: orderReducer } = orderSlice;
