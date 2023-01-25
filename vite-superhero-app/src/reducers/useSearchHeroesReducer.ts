import { Hero } from '../types/hero'

export type ReducerState = {
  heroes: Hero[];
  search: string;
  loading: boolean;
  error: boolean;
  errorMessage: string;
};

export enum ActionNames {
  SET_LOADING = 'SET_LOADING',
  SET_HEROES = 'SET_HEROES',
  SET_INPUT = 'SET_INPUT',
  SET_ERROR = 'SET_ERROR',
}

export type ActionType =
  | {
      type: ActionNames.SET_LOADING;
    }
  | {
      type: ActionNames.SET_HEROES;
      payload: Hero[];
    }
  | {
      type: ActionNames.SET_INPUT;
      payload: string;
    }
  | {
      type: ActionNames.SET_ERROR;
      payload: string;
    };

export const useSearchHeroesReducer = (state: ReducerState, action: ActionType) => {
  switch (action.type) {
    case ActionNames.SET_LOADING:
      return {
        ...state,
        loading: true,
        error: false,
        errorMessage: '',
      };
    case ActionNames.SET_INPUT:
      return {
        ...state,
        search: action.payload,
      };
    case ActionNames.SET_HEROES:
      return {
        ...state,
        loading: false,
        heroes: action.payload,
      };
    case ActionNames.SET_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: action.payload,
      };
    default:
      throw new Error('Not a valid action type - Search Hero Reducer');
  }
};