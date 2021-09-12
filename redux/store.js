import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";

const store = configureStore({
  reducer: {
    // Define a top-level state field named `todos`, handled by `todosReducer`
    cart: cartReducer,
  },
});

export default store;
