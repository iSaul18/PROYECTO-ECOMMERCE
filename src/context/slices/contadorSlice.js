import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contador: 0,
};

const contadorSlice = createSlice({
  name: "contador",
  initialState,
  reducers: {
    increment: (state) => {
      state.contador += 1;
    },
    decrement: (state) => {
      state.contador -= 1;
    },
  },
});

export const { increment, decrement } = contadorSlice.actions;

export default contadorSlice.reducer;
