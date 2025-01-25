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
  pagination: JSON.parse(localStorage.getItem("pagination") || "{}"),
  filters: JSON.parse(localStorage.getItem("filters") || "{}"),
  searchValue: "",
};

export const productListSlice = createSlice({
  name: "productList",
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },

    setFilters(state, action: PayloadAction<ProductListFilters>) {
      state.filters = action.payload;
    },

    setPaginationPage(state, action: PayloadAction<"dec" | "inc" | number>) {
      if (
        action.payload === "inc" &&
        state.data?.totalPages > state.pagination.page
      ) {
        state.pagination.page += 1;
        localStorage.setItem(
          "pagination",
          JSON.stringify({
            limit: state.pagination.limit,
            page: state.pagination.page,
          })
        );
      } else if (action.payload === "dec" && state.pagination.page > 1) {
        state.pagination.page -= 1;
        localStorage.setItem(
          "pagination",
          JSON.stringify({
            limit: state.pagination.limit,
            page: state.pagination.page,
          })
        );
      } else if (typeof action.payload === "number") {
        state.pagination.page = action.payload;

        localStorage.setItem(
          "pagination",
          JSON.stringify({
            limit: state.pagination.limit,
            page: action.payload,
          })
        );
      }
    },

    // incPaginationPage(state) {
    //   if ( > ) {
    //     state.pagination.page += 1;

    //   }
    // },

    // decPaginationPage(state) {
    //   if () {

    //   }
    // },
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
