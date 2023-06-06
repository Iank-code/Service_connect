// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const serviceCartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addServiceItem: (state, action) => {
      state.push(action.payload);
    },
    removeServiceItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    clearServiceCart: () => [],
  },
});

export const { addServiceItem, removeServiceItem, clearServiceCart } = serviceCartSlice.actions;

export default serviceCartSlice.reducer;
