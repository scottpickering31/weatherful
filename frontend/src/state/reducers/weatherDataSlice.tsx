import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk for fetching current weather data
export const fetchWeatherData = createAsyncThunk(
  "weatherData/fetchWeatherData",
  async (_, { getState }) => {
    const state = getState();
    const activeTimeFrame = state.timeFrame.activeTimeFrame;
    const locations = state.inputData.city;
    const time = activeTimeFrame === "daily" ? 24 : 1;
    const url = `https://visual-crossing-weather.p.rapidapi.com/forecast?aggregateHours=${time}&location=${locations}&contentType=json&shortColumnNames=0`;
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
  },
);

export const fetchFutureForecastData = createAsyncThunk(
  "weatherData/fetchFutureForecastData",
  async (_, { getState }) => {
    const state = getState();
    const locations = state.inputData.city;
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
  },
);

const weatherDataSlice = createSlice({
  name: "weatherData",
  initialState: {
    weatherData: null,
    futureWeatherData: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWeatherData.fulfilled, (state, action) => {
      state.weatherData = action.payload;
    });
    builder.addCase(fetchWeatherData.pending, (state) => {
      state.weatherData = null;
    });
    builder.addCase(fetchWeatherData.rejected, (state) => {
      state.weatherData = null;
    });
    builder.addCase(fetchFutureForecastData.fulfilled, (state, action) => {
      state.futureWeatherData = action.payload;
    });
    builder.addCase(fetchFutureForecastData.pending, (state) => {
      state.futureWeatherData = null;
    });
    builder.addCase(fetchFutureForecastData.rejected, (state) => {
      state.futureWeatherData = null;
    });
  },
});

export default weatherDataSlice.reducer;
