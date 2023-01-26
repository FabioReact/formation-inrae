import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type User = {
  email: string;
  password: string;
};

type UserResponse = {
  accessToken: string;
};

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000' }),
  endpoints: (build) => ({
    register: build.mutation<UserResponse, User>({
      query: (user) => ({
        url: '/register',
        method: 'POST',
        body: user,
      }),
    }),
  }),
});

export const { useRegisterMutation } = authApi;
