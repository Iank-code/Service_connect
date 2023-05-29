import { configureStore } from "@reduxjs/toolkit";
import signUpReducer from "./features//signupSlice"


export const store = configureStore({
  reducer: {
    signup: signUpReducer,
  },
});
