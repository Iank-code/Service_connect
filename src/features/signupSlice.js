import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isServiceProvider: false,
  isClient: false,
};
const signUpSlice = createSlice({
  name: "signUp",
  initialState,
  reducers: {
    reset: (state) => {
      state.isServiceProvider = false;
      state.isClient = false;
    },
    setServiceProvider: (state, action) => {
      state.isServiceProvider = action.payload;
    },
    setClient: (state, action) => {
      state.isClient = action.payload;
    },
  },
});

export const { reset, setServiceProvider, setClient } = signUpSlice.actions;
export default signUpSlice.reducer;
