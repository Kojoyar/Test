import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCountryByName, getCountrySearch } from '../../store/reducers/actions/counter.actions';

const CounterSearch = () => {
  const dispatch = useDispatch()
  const [input, setInput] = useState("");
  const navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(getCountrySearch(input));
  };

  return (
    <>
      {/* <button onClick={() => navigate('/')} >
        Back
      </button> */}
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Search a country......"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
    </>
  )
}

export default CounterSearch