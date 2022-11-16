import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosFetch } from "../../api/axiosFetch";

export const getProductsAction = createAsyncThunk("PRODUCTS/getProducts", async () => {
  const { data } = await axiosFetch.get("/products");
  return data;
});
