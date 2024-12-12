import { createSlice } from "@reduxjs/toolkit";
import { OrderSchema } from "../types/orderSchema";
import { createOrderThunk } from "../services/createOrderThunk";

const initialState: OrderSchema = {
  data: null,
  isLoading: false,
  error: undefined,
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createOrderThunk.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(createOrderThunk.fulfilled, () => {
        console.log("Заказ оформлен");
      })
      .addCase(createOrderThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: orderActions, reducer: orderReducer } = orderSlice;
