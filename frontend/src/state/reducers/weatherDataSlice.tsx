import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

export const fetchWeatherData = createAsyncThunk(
  "weatherData/fetchWeatherData",
  async (_, { getState, rejectWithValue }) => {
    const state: RootState = getState();
    const activeTimeFrame: string = state.timeFrame.activeTimeFrame;
    const locations: string = state.inputData.city;
    const time: number = activeTimeFrame === "daily" ? 24 : 1;
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
      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue(errorData);
      }
      const result = await response.json();
      return result;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.message);
    }
  }
);

export const fetchFutureForecastData = createAsyncThunk(
  "weatherData/fetchFutureForecastData",
  async (_, { getState, rejectWithValue }) => {
    const state: RootState = getState();
    const locations: string = state.inputData.city;
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
      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue(errorData);
      }
      const result = await response.json();
      return result;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.message);
    }
  }
);

const weatherDataSlice = createSlice({
  name: "weatherData",
  initialState: {
    weatherData: null,
    futureWeatherData: null,
    loadingCurrentWeather: false,
    loadingFutureWeather: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.weatherData = null;
      state.futureWeatherData = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWeatherData.fulfilled, (state, action) => {
      state.weatherData = action.payload;
      state.loadingCurrentWeather = false;
      state.error = null;
    });
    builder.addCase(fetchWeatherData.pending, (state) => {
      state.loadingCurrentWeather = true;
    });
    builder.addCase(fetchWeatherData.rejected, (state, action) => {
      state.weatherData = null;
      state.loadingCurrentWeather = false;
      state.error = action.payload || "An error occurred";
    });
    builder.addCase(fetchFutureForecastData.fulfilled, (state, action) => {
      state.futureWeatherData = action.payload;
      state.loadingFutureWeather = false;
      state.error = null;
    });
    builder.addCase(fetchFutureForecastData.pending, (state) => {
      state.loadingFutureWeather = true;
    });
    builder.addCase(fetchFutureForecastData.rejected, (state, action) => {
      state.futureWeatherData = null;
      state.loadingFutureWeather = false;
      state.error = action.payload || "An error occurred";
    });
  },
});

export const { logout } = weatherDataSlice.actions;

export default weatherDataSlice.reducer;
