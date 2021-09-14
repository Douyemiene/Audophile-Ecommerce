import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cart from "../components/Cart";
import products from "../data/data";
import { singleProductType } from "../data/data";

type cartItem = {
  [index: string]: number;
};

type appState = {
  products: singleProductType[];
  cart: cartItem[];
};

const initialState = {
  products: products,
  cart: [
    {
      xx59: 0,
    },
  ],
} as appState;

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    addTocart: (state, action: PayloadAction<string>) => {
      let cart = state.cart;

      cart.forEach((item, idx) => {
        const objIndex = Object.keys(item)[0];
        if (objIndex === action.payload) {
          cart[idx] = { [objIndex]: cart[idx][objIndex] + 1 };
        } else {
          cart.push({ [objIndex]: 0 });
        }
      });
    },
    removeFromcart: (state, action: PayloadAction<string>) => {
      const { cart } = state;
      cart.forEach((item, idx) => {
        const objIndex = Object.keys(item)[0];
        if (objIndex === action.payload) {
          cart[idx] = { [objIndex]: cart[idx][objIndex] - 1 };
        }
      });
    },
  },
});

export const { addTocart, removeFromcart } = appSlice.actions;

export default appSlice.reducer;
