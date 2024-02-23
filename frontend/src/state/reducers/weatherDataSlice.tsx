import { createSlice } from "@reduxjs/toolkit";

const weatherDataSlice = createSlice({
  name: "weatherData",
  initialState: {
    weatherData: null,
  },
  reducers: {
    setWeatherData: (state, action) => {
      state.weatherData = action.payload;
    },
  },
});

export const { setWeatherData } = weatherDataSlice.actions;
export default weatherDataSlice.reducer;
