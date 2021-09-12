import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: {},
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addTocart: (state, action) => {
      const product = state.cart[action.payload];
      if (product) {
        product = 0;
      } else {
        product += 1;
      }
    },
  },
});

export const { addTocart } = cartSlice.actions;

export default cartSlice.reducer;
