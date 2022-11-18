import { createSlice } from "@reduxjs/toolkit";
import { getProductsAction } from "../actions/getProductsAction";

const initialState = {
  products: [],
  isLoading: false,
  isError: null,
};

const productsSlice = createSlice({
  name: "PRODUCTS",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getProductsAction.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(getProductsAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    });
  },
});

export const {} = productsSlice.actions;

export default productsSlice.reducer;
