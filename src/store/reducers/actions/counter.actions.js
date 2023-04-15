import axios from "axios"
import { getCounterBorders, getCounterDetails, getCountries, setFavorites } from "../slices/counter.slices"

const API = 'https://restcountries.com/v3.1';
// https://restcountries.com/v3.1/alpha/{code}

export const getCountriesList = () => async (dispatch) => {
    try {
        let res = await axios(`${API}/all`) 
        dispatch(getCountries(res.data))

    } catch (error) {
        console.log(error.message);
    }
}

export const getCountryByName = (countryName) => async (dispatch) => {
    try {
      const res = await axios(`${API}/name/${countryName}`);
      dispatch(getCounterDetails(res.data))
    } catch (error) {
      console.log(error.message);
    }
};

export const getCountrySearch = (countryName) => async (dispatch) => {
    try {
      const res = await axios(`${API}/name/${countryName}`);
      dispatch(getCountries(res.data))

    } catch (error) {
      console.log(error.message);
    }
};

export const getCountryByRegion = (regionName) => async (dispatch) => {
    try {
      const res = await axios(`${API}/region/${regionName}`);
      dispatch(getCountries(res.data))
    } catch (error) {
      console.log(error);
    }
  };

export const getCountryByBorders = (border) => async (dispatch) => {
    const res = await axios(`https://restcountries.com/v3.1/alpha/KGZ?fields=borders`)
    dispatch(getCounterBorders(res.data.borders))
}

export const favProduct = (card) => (dispatch) => {
    const products = JSON.parse(localStorage.getItem("favorites"));
    products.push(card);
    localStorage.setItem("favorites", JSON.stringify(products));
  };

export const delFavorite = (id) => (dispatch) => {
    let products = JSON.parse(localStorage.getItem("favorites"));
    products = products.map((elem) => elem.id !== id);
    localStorage.setItem("favorites", JSON.stringify(products));
  }

export const setLikeStorage = () => (dispatch) => {
    localStorage.setItem("favorites", JSON.stringify([]));
}

export const counterAlpha = (code) => async (dispatch) => {
    const res = await axios(`${API}/alpha/${code}`);
    dispatch(getCounterDetails(res.data))
}