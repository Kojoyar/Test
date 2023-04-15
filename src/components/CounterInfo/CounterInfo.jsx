import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { counterAlpha, getCountryByName } from '../../store/reducers/actions/counter.actions'
import { getCountryByBorders } from '../../store/reducers/actions/counter.actions'

const CounterInfo = () => {
    const info = useSelector(state => state.countries.info)
    const borders = useSelector(state => state.countries.borders)
    const dispatch = useDispatch()
    const {countryName} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getCountryByName(countryName))
    }, [countryName])

    useEffect(() => {
        dispatch(getCountryByBorders())
    }, [])
  return (
    <div className="country__info__wrapper">
        <button onClick={() => navigate('/')} >
            Back
        </button>
            <>
            {info?.map((country, index) => (
            <div className="country__info__container" key={index}>
                <div className="country__info-img">
                <img src={country.flags.png} alt="" />
                </div>
    
                <div className="country__info">
                <h3>{country.name.common}</h3>
    
                <div className="country__info-left">
                    <h5>
                    Population:{" "}
                    <span>
                        {new Intl.NumberFormat().format(country.population)}
                    </span>
                    </h5>
                    <h5>
                    Region: <span>{country.region}</span>
                    </h5>
                    <h5>
                    Sub Region: <span>{country.subregion}</span>
                    </h5>
                    <h5>
                    Capital: <span>{country.capital}</span>
                    {typeof country.borders !== 'undefined'? (
                        <>
                         <h5 style={{marginTop: '10px'}} >Borders:</h5> {country.borders.map(item => (
                                <>
                                <div onClick={() => {navigate(`/country/${country.name.common}`); dispatch(counterAlpha(item))}} >
                                     <p>{item}</p>
                                </div>
                                </>
                            ))}

                        </>
                    ) : (
                        <>
                        Borders: <span>None</span>
                        </>
                    )}
                    </h5>
                </div>
                </div>
            </div>
            ))}
            </>
     </div>
  )
}

export default CounterInfo