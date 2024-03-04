import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchWeatherData = createAsyncThunk(
  "weatherData/fetchWeatherData",
  async (newLocation) => {
    const locations = newLocation || "London";
    const url = `https://visual-crossing-weather.p.rapidapi.com/forecast?aggregateHours=24&location=${locations}&contentType=json&shortColumnNames=0`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
        "X-RapidAPI-Host": import.meta.env.VITE_BASE_URL,
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

const weatherDataSlice = createSlice({
  name: "weatherData",
  initialState: {
    weatherData: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWeatherData.fulfilled, (state, action) => {
      state.weatherData = action.payload;
    });
    builder.addCase(fetchWeatherData.rejected, (state) => {
      state.weatherData = null;
    });
    builder.addCase(fetchWeatherData.pending, (state) => {
      state.weatherData = null;
    });
  },
});

export default weatherDataSlice.reducer;
