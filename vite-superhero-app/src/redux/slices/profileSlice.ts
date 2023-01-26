import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import type { RootState } from '../store';

type ProfileState = {
  favoriteHeroes: number[];
};

const initialState: ProfileState = {
  favoriteHeroes: [346, 720],
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    addToFavorite: (state, action: PayloadAction<number>) => {
      state.favoriteHeroes.push(action.payload);
    },
  },
});

export const { addToFavorite } = profileSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default profileSlice.reducer;
