import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './slices/profileSlice';
import citiesReducer from './slices/citiesSlice';
import { heroesApi } from './services/heroes';
import { authApi } from './services/auth';

export const store = configureStore({
  reducer: {
    profile: profileReducer,
    cities: citiesReducer,
    [heroesApi.reducerPath]: heroesApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(heroesApi.middleware, authApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
