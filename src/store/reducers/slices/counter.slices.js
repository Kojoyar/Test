import { createSlice } from "@reduxjs/toolkit";

export const countriesSlice = createSlice({
    name: "countries",
    initialState: {
        countries: [],
        info: [],
        favorites: [],
        borders: []
    },
    reducers: {
        getCountries(state, action) {
            state.countries = action.payload
        }, 
        getCounterDetails(state, action) {
            state.info = action.payload
        }, 
        getCounterBorders(state, action) {
            state.borders = action.payload
        }, 
    }
})

export const { getCountries, getCounterDetails,getCounterBorders } = countriesSlice.actions