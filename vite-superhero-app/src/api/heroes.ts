import { Hero } from '../types/hero';
import { fetcher } from './fetcher';

export const getHeroById = (id: string) => {
  return fetcher
    .get<Hero>(`/heroes/${id}`)
    .then((res) => res.data)
    .catch((e) => {
      throw new Error('Server error', e.message);
    });
};
