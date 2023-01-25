import { useState } from 'react';
import { fetcher } from '../api/fetcher';
import { Hero } from '../types/hero';

export const useSearchHeroes = () => {
  const [heroes, setheroes] = useState<Hero[]>([]);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(false);
  const [errorMessage, seterrorMessage] = useState('');

  const searchHeroes = (name: string) => {
    setloading(true);
    seterror(false);
    seterrorMessage('');
    fetcher
      .get<Hero[]>(`/heroes?name_like=^${name}`)
      .then((response) => {
        setheroes(response.data);
      })
      .catch((err) => {
        seterror(true);
        seterrorMessage(err.message);
      })
      .finally(() => {
        setloading(false);
      });
  };

  return {
    heroes,
    loading,
    error,
    errorMessage,
    searchHeroes,
  };
};
