import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Hero } from '../../types/hero';

export const heroesApi = createApi({
  reducerPath: 'heroesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000' }),
  endpoints: (build) => ({
    getHerobyId: build.query<Hero, number>({
      query: (id) => `heroes/${id}`,
    }),
    searchHeroesByName: build.query<Hero[], string>({
      query: (name) => `heroes?name_like=^${name}`,
    }),
  }),
});

export const {
  useGetHerobyIdQuery,
  useLazyGetHerobyIdQuery,
  useSearchHeroesByNameQuery,
  useLazySearchHeroesByNameQuery,
} = heroesApi;
