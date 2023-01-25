import { useReducer } from 'react';
import { fetcher } from '../api/fetcher';
import { ActionNames, useSearchHeroesReducer } from '../reducers/useSearchHeroesReducer';
import { Hero } from '../types/hero';

export const useSearchHeroes = () => {
  const initialState = {
    heroes: [],
    search: '',
    loading: false,
    error: false,
    errorMessage: '',
  };

  const [state, dispatch] = useReducer(useSearchHeroesReducer, initialState);

  const searchHeroes = (name: string) => {
    dispatch({
      type: ActionNames.SET_LOADING,
    });
    fetcher
      .get<Hero[]>(`/heroes?name_like=^${name}`)
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

  return {
    ...state,
    searchHeroes,
  };
};
