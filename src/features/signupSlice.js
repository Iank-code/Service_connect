import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  password: "",
  isServiceProvider: false,
  isClient: false,
};
const signUpSlice = createSlice({
  name: "signUp",
  initialState,
  reducers: {
    reset: (state) => {
      state.firstName = "";
      state.password = "";
      state.isServiceProvider = false;
      state.isClient = false;
    },
  },
});

export const { reset } = signUpSlice.actions;
export default signUpSlice.reducer;
