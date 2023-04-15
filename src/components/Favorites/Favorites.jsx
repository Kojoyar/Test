import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { favProduct } from '../../store/reducers/actions/counter.actions'

const Favorites = () => {
    const favoritesLocal = JSON.parse(localStorage.getItem('favorites'))
    const navigate = useNavigate()
    const dispatch = useDispatch()

    function handleFav(country) {
        dispatch(favProduct(country))
      }
  return (
    <>
        {favoritesLocal.map(country => (
            <>
            <div key={country.id} className="all__country__wrapper">
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
                {typeof country.borders !== 'undefined'? (
                <>
                    {country.borders.map(item => (
                        <p>{item}</p>
                    ))}

                </>
            ) : (
                <>
                Borders: <span>None</span>
                </>
            )}
              </div>
                <button onClick={() => handleFav(country)} >Save</button>
            </div>
            </div>
           </>
        ))}
    </>
  )
}

export default Favorites