import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";

export const changeLocation = createAction(
  "weatherData/changeLocation",
  (newLocation) => ({
    payload: newLocation,
    meta: {
      thunk: fetchWeatherData,
    },
  }),
);

export const fetchWeatherData = createAsyncThunk(
  "weatherData/fetchWeatherData",
  async (_, { getState }) => {
    const locations = getState().weatherData.locations;
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
    }
  },
);

const weatherDataSlice = createSlice({
  name: "weatherData",
  initialState: {
    weatherData: null,
    locations: "London",
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
    builder.addCase(changeLocation, (state, action) => {
      state.locations = action.payload;
    });
  },
});

export default weatherDataSlice.reducer;
