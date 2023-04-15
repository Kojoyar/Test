import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { delFavorite, favProduct, getCountriesList, toggleFavoriteCountry } from '../../store/reducers/actions/counter.actions';
import CounterFilter from '../CounterFilter/CounterFilter';
import CounterSearch from '../CounterSearch/CounterSearch';
import { getCountryByBorders } from '../../store/reducers/actions/counter.actions'


const CounterList = () => {
  const [favorites, setFavorites] = useState(false) 
  const countries = useSelector(state => state.countries.countries)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getCountriesList())
  }, [])

  function handleFav(country) {
    dispatch(favProduct(country))
    // setFavorites(true);
  }

  function handleDelFav(id) {
    dispatch(delFavorite(id))
    setFavorites(false);
  }

  return (
    <>
    <div className="all__country__wrapper">
    <div className="country__top">
      <div className="search">
        <CounterSearch />
      </div>

      <div className="filter">
        <CounterFilter/>
      </div>
    </div>
    <div className="country__bottom">
      {countries.map(country => (
            <div className="country__card" key={country.id} >
              <div className="country__img" onClick={() => navigate(`/country/${country.name.common}`)}>
                <img src={country.flags.png} alt="" />
              </div>
              <div className="country__data">
                <h3>{country.name.common}</h3>
                <h6>
                  {" "}
                  Population:{" "}
                  {new Intl.NumberFormat().format(country.population)}
                </h6>
                <h6> Region: {country.region}</h6>
                <h6>Capital: {country.capital}</h6>
              </div>
              {favorites? (
                <button onClick={() => handleDelFav(country.id)} >unSave</button>
                ) : (
                <button onClick={() => handleFav(country)} >Save</button>
              )}
            </div>
           ))}
        </div>
      </div>
    </>
  )
}

export default CounterList