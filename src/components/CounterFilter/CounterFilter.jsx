import React from 'react';
import { useDispatch } from 'react-redux';
import { getCountryByRegion } from '../../store/reducers/actions/counter.actions';

const CounterFilter = () => {
  const dispatch = useDispatch()

  const selectHandler = (e) => {
    const regionName = e.target.value;
    dispatch(getCountryByRegion(regionName));
  };
  return (
    <select onChange={selectHandler}>
      <option className="option">Filter by Region</option>
      <option className="option" value="Africa">
        Africa
      </option>
      <option className="option" value="America">
        America
      </option>
      <option className="option" value="Asia">
        Asia
      </option>
      <option className="option" value="Europe">
        Europe
      </option>
      <option className="option" value="Oceania">
        Oceania
      </option>
  </select>
  )
}

export default CounterFilter