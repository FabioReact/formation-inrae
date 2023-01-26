import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CitiesState = {
  citiesToVisit: City[];
};

type City = {
  cityId: number;
  cityName: string;
};

const initialState: CitiesState = {
  citiesToVisit: [
    {
      cityName: 'Paris',
      cityId: 1,
    },
  ],
};

export const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    addCity: (state, action: PayloadAction<string>) => {
      state.citiesToVisit.push({
        cityId: Date.now(),
        cityName: action.payload,
      });
    },
    removeCity: (state, action: PayloadAction<number>) => {
      state.citiesToVisit = state.citiesToVisit.filter((city) => city.cityId !== action.payload);
    },
  },
});

export const { addCity, removeCity } = citiesSlice.actions;

export default citiesSlice.reducer;
