import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [
    {
      name: "mangue",
      url: "/images/mangue.jpg",
      price: 300,
      id: 200620,
    },
    {
      name: "pasteque",
      url: "/images/pasteque.jpg",
      price: 500,
      id: 200621,
    },
  ],
};

export const Fruits = createSlice({
  name: "Fruits",
  initialState,
});

export default Fruits.reducer;
