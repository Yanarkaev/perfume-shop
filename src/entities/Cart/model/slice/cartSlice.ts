import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartSchema } from "../types/cartShema";
import { Product } from "../../../../app/types/product";

const initialState: CartSchema = {
  data: JSON.parse(localStorage.getItem("cart") || "[]"),
  isLoading: false,
  error: undefined,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartData(state, action: PayloadAction<Product>) {
      state.data = [...state.data, action.payload];
      localStorage.setItem("cart", JSON.stringify(state.data));
    },

    deleteFromCart(state, action: PayloadAction<string>) {
      state.data = state.data.filter((el) => el._id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.data));
    },
  },
  extraReducers: () => {},
});

export const { actions: cartActions, reducer: cartReducer } = cartSlice;
