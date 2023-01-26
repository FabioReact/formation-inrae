import { createSlice } from '@reduxjs/toolkit';

type CitiesState = {
  citiesToVisit: string[];
};

const initialState: CitiesState = {
  citiesToVisit: ['Paris'],
};

export const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {},
});

export default citiesSlice.reducer;
