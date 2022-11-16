import { configureStore } from "@reduxjs/toolkit";
import products from "./slices/productsSlice";
import contador from "./slices/contadorSlice";

export const store = configureStore({
  reducer: {
    PRODUCTS: products,
    CONTADOR: contador,
  },
});
