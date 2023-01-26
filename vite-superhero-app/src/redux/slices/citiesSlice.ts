import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CitiesState = {
  citiesToVisit: string[];
};

type City = {
  cityId: number;
  cityName: string;
};

const initialState: CitiesState = {
  citiesToVisit: ['Paris'],
};

export const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    addCity: (state, action: PayloadAction<string>) => {
      state.citiesToVisit.push(action.payload);
    },
  },
});

export const { addCity } = citiesSlice.actions;

export default citiesSlice.reducer;
