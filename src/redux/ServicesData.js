import { createSlice } from "@reduxjs/toolkit";

export const servicesDataSlice = createSlice({
    name: 'servicesData',
    initialState: {
        servicesData: [],
        searchTerm: ""
    },
    reducers: {
        setServicesData: (state, action) => {
            state.servicesData = action.payload;
        },
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        }
    }
});

export const { setServicesData, setSearchTerm} = servicesDataSlice.actions;
export default servicesDataSlice.reducer;