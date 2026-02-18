import { configureStore } from "@reduxjs/toolkit";
import Fruits from "./assets/Features/Fruits";
import fruitsCart from "./assets/Features/fruitsCart";

export const store = configureStore({
  reducer: {
    Fruits,
    fruitsCart,
  },
});
