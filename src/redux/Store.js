import { configureStore } from "@reduxjs/toolkit";
import ServicesDataReducer from "./ServicesData";

export default configureStore({
    reducer: {
        services: ServicesDataReducer,
        searchTerm: ServicesDataReducer
    }
});