import { createContext, useContext } from 'react';

// Type 'number' is not assignable to type 'never'

export const ProfileContext = createContext<{
  favoriteHeroes: number[];
  setFavoriteHeroes: React.Dispatch<React.SetStateAction<number[]>>;
}>({
  favoriteHeroes: [],
  setFavoriteHeroes: () => null,
});

export const useProfile = () => useContext(ProfileContext);
