import React, {useEffect} from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import CounterInfo from './components/CounterInfo/CounterInfo';
import CounterList from './components/CounterList/CounterList';
import './App.css'
import { useDispatch } from 'react-redux';
import { getCountryByBorders, setLikeStorage } from './store/reducers/actions/counter.actions';
import Favorites from './components/Favorites/Favorites';

const App = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  window.addEventListener('load', function() {
    if (!localStorage.getItem('favorites')) {
      dispatch(setLikeStorage())
    }
  });

  useEffect(() => {
    dispatch(getCountryByBorders())
  }, [])

  return (
    <>
      <div className="header">
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}} className="container">
          <h5>Where in the world</h5>
          <a onClick={() => navigate('/')} >Home</a>
          <a style={{color: 'white'}} onClick={() => navigate('/favorites')} >Favorite Countries</a>
        </div>
      </div>
      <div className="container">
        <Routes>
          <Route path="/" element={<CounterList/>} />
          <Route path="/country/:countryName" element={<CounterInfo/>} />
          <Route path="/favorites" element={<Favorites/>} />
        </Routes>
      </div>
  </>
  )
}

export default App