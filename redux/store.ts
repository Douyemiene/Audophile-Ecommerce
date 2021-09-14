import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appReducer";

const store = configureStore({
  reducer: {
    // Define a top-level state field named `todos`, handled by `todosReducer`
    app: appReducer,
  },
});

export default store;
