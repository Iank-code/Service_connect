import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  role: false,
  path: false,
};
const signUpSlice = createSlice({
  name: "signUp",
  initialState,
  reducers: {
    // For reseting
    reset: (state) => {
      state.role = "";
      state.path = "";
    },
    setRole: (state, action) => {
      state.role = action.payload;
    },
    setPath: (state, action) => {
      state.path = action.payload;
    },
  },
});

export const { reset, setRole, setPath } = signUpSlice.actions;
export default signUpSlice.reducer;
