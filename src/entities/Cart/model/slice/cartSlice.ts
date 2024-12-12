import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartProduct, CartSchema } from "../types/cartShema";

const initialState: CartSchema = {
  data: JSON.parse(
    localStorage.getItem("cart") || '{"cartData": [], "totalValue": 0}'
  ),
  totalSum: 0,
  isLoading: false,
  error: undefined,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartData(state, action: PayloadAction<CartProduct>) {
      state.data.cartData = [...state.data.cartData, action.payload];
      localStorage.setItem(
        "cart",
        JSON.stringify({
          cartData: state.data.cartData,
          totalValue: state.totalSum,
        })
      );
    },

    resetCartData(state) {
      state.data = { cartData: [], totalValue: 0 };
      state.totalSum = 0;
      localStorage.setItem("cart", JSON.stringify(state.data));
    },

    deleteFromCart(state, action: PayloadAction<string>) {
      state.data.cartData = state.data.cartData.filter(
        (el) => el._id !== action.payload
      );
      localStorage.setItem(
        "cart",
        JSON.stringify({
          cartData: state.data.cartData,
          totalValue: state.totalSum,
        })
      );
    },

    setProductCount(
      state,
      action: PayloadAction<{ id: string; act: "inc" | "dec" }>
    ) {
      const product = state.data.cartData.find(
        (el) => el._id === action.payload.id
      );

      if (!product) {
        return;
      }

      if (action.payload.act === "inc") {
        product.count += 1;
      }
      if (action.payload.act === "dec") {
        product.count -= 1;
      }

      localStorage.setItem(
        "cart",
        JSON.stringify({
          cartData: state.data.cartData,
          totalValue: state.totalSum,
        })
      );
    },

    setTotalSum(state) {
      const currentTotalSum = state.data.cartData
        ? state.data.cartData.reduce((prev, item) => {
            return prev + item.price * item.count;
          }, 0)
        : 0;

      state.totalSum = currentTotalSum;

      localStorage.setItem(
        "cart",
        JSON.stringify({
          cartData: state.data.cartData,
          totalValue: currentTotalSum,
        })
      );
    },
  },
  extraReducers: () => {},
});

export const { actions: cartActions, reducer: cartReducer } = cartSlice;
