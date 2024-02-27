import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRandomCity = createAsyncThunk(
  "weather/fetchWeather",
  async () => {
    const randomCityArr = [
      "London",
      "York",
      "Liverpool",
      "Manchester",
      "Brighton",
    ];
    const randomCity = Math.floor(Math.random() * randomCityArr.length);
    const url = `https://visual-crossing-weather.p.rapidapi.com/forecast?aggregateHours=24&location=${randomCityArr[randomCity]}&contentType=json&shortColumnNames=0`;

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
      const weatherData = result;
      console.log(weatherData);
      if (response.ok) {
        return weatherData;
      }
    } catch (error) {
      console.error(error);
    }
  },
);

const weatherDataSlice = createSlice({
  name: "weatherData",
  initialState: {
    weatherData: null,
    loading: "idle",
    error: null,
  },
  reducers: {
    setWeatherData: (state, action) => {
      state.weatherData = action.payload;
      state.loading = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomCity.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(fetchRandomCity.fulfilled, (state, action) => {
        state.loading = "idle";
        state.weatherData = action.payload;
      })
      .addCase(fetchRandomCity.rejected, (state, action) => {
        state.loading = "idle";
        state.error = action.error.message;
      });
  },
});

export const { setWeatherData } = weatherDataSlice.actions;
export default weatherDataSlice.reducer;
