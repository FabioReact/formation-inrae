import React, { useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { addCity } from '../redux/slices/citiesSlice';

const Cities = () => {
  const cities = useAppSelector((state) => state.cities.citiesToVisit);
  const dispatch = useAppDispatch();
  const cityInputRef = useRef<HTMLInputElement>(null);

  const onSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const city = cityInputRef.current?.value;
    if (city) {
      dispatch(addCity(city));
    }
  };

  return (
    <section>
      <h1>Cities to visit</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor='city'>City name:</label>
        <input ref={cityInputRef} type='text' id='city' name='city' />
        <button>Add</button>
      </form>
      <ul>
        {cities.map((city) => (
          <li key={city}>{city} <button>Delete</button></li>
        ))}
      </ul>
    </section>
  );
};

export default Cities;
