import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cart from "../components/Cart";
import products from "../data/data";
import { singleProductType } from "../data/data";

export type cartItem = {
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
      xx59: 1,
    },
    {
      yx1: 2,
    },
    {
      zx9: 3,
    },
  ],
} as appState;

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    addTocart: (state, action: PayloadAction<string>) => {
      let cart = state.cart;
      let objIndex: string = "";

      const idx = cart.findIndex((item) => {
        objIndex = Object.keys(item)[0];
        return objIndex === action.payload;
      });

      if (objIndex === action.payload) {
        cart[idx] = { [objIndex]: cart[idx][objIndex] + 1 };
      } else {
        cart.push({ [action.payload]: 0 });
      }
    },
    removeFromcart: (state, action: PayloadAction<string>) => {
      const { cart } = state;
      let objIndex: string = "";

      const idx = cart.findIndex((item) => {
        objIndex = Object.keys(item)[0];
        return objIndex === action.payload;
      });

      if (objIndex === action.payload) {
        cart[idx] = { [objIndex]: cart[idx][objIndex] - 1 };
      }
    },
  },
});

export const { addTocart, removeFromcart } = appSlice.actions;

export default appSlice.reducer;
