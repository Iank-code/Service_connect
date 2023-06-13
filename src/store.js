import { configureStore } from "@reduxjs/toolkit";
import ServicesDataReducer from "./redux/ServicesData";
import signUpReducer from "./features/signupSlice";
import serviceCartReducer from "./features/signupSlice";

export const store = configureStore({
  reducer: {
    signup: signUpReducer,
    serviceCart: serviceCartReducer,
    services: ServicesDataReducer,
    searchTerm: ServicesDataReducer,
  },
});
