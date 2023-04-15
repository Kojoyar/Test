import { configureStore } from "@reduxjs/toolkit";
import { countriesSlice } from "./reducers/slices/counter.slices";

export const store = configureStore({
    reducer: {
        countries: countriesSlice.reducer,
    }
})