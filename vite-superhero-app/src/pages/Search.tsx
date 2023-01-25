import React, { useReducer } from 'react';
import { fetcher } from '../api/fetcher';
import HeroesList from '../components/HeroesList';
import { ActionNames, ReducerState, useSearchHeroesReducer } from '../reducers/useSearchHeroesReducer'
import { Hero } from '../types/hero';

const Search = () => {
  const initialState: ReducerState = {
    heroes: [],
    search: '',
    loading: false,
    error: false,
    errorMessage: '',
  };
  const [state, dispatch] = useReducer(useSearchHeroesReducer, initialState);

  const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: ActionNames.SET_INPUT,
      payload: event.target.value,
    });
  };

  const onSearchHandler = () => {
    dispatch({
      type: ActionNames.SET_LOADING,
    });
    fetcher
      .get<Hero[]>(`/heroes?name_like=^${state.search}`)
      .then((response) => {
        dispatch({
          type: ActionNames.SET_HEROES,
					payload: response.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: ActionNames.SET_ERROR,
          payload: err.message,
        });
      });
  };

  return (
    <section>
      <h1>Search</h1>
      <fieldset>
        <label htmlFor='name'>Name</label>
        <input onChange={onChangeSearch} value={state.search} type='text' id='name' name='name' />
      </fieldset>
      <button onClick={onSearchHandler}>Search</button>
      {state.loading ? <div>Chargement</div> : undefined}
      {state.error && <div className='text-red-600'>{state.errorMessage}</div>}
      <div>
        <HeroesList heroes={state.heroes} />
      </div>
    </section>
  );
};

export default Search;
