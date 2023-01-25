import React, { useState, useReducer } from 'react';
import { fetcher } from '../api/fetcher';
import HeroesList from '../components/HeroesList';
import { Hero } from '../types/hero';

type ReducerState = {
	heroes: Hero[];
	search: string;
	loading: boolean;
	error: boolean;
	errorMessage: string;
};

const reducer = (state: ReducerState, action: any) => {
	switch (action.type) {
		case 'setLoading':
			return {
				...state,
				loading: true,
				error: false,
				errorMessage: '',
			}
		case 'changeSearchInput':
			return {
				...state,
				search: action.payload,
			}
		case 'setHeroes':
			return {
				...state,
				loading: false,
				heroes: action.payload,
			}
		case 'setError':
			return {
				...state,
				loading: false,
				error: true,
				errorMessage: action.payload,
			}
		default:
			throw new Error('Not a valid action type - Search Hero Reducer');
	}
};

const Search = () => {
  const initialState: ReducerState = {
    heroes: [],
    search: '',
    loading: false,
    error: false,
    errorMessage: '',
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch({
			type: 'changeSearchInput',
			payload: event.target.value,
		})
  };

  const onSearchHandler = () => {
		dispatch({
			type: 'setLoading',
		})
    fetcher
      .get<Hero[]>(`/heroes?name_like=^${state.search}`)
      .then((response) => {
				dispatch({
					type: 'setHeroes',
					payload: response.data,
				});
      })
      .catch((err) => {
				dispatch({
					type: 'setError',
					payload: err.message,
				})
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

// export { Search as default}
export default Search;
