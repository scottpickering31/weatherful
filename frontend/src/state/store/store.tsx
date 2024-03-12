import { configureStore } from "@reduxjs/toolkit";
import weatherDataSlice from "../reducers/weatherDataSlice";
import iconDataSlice from "../reducers/iconDataSlice";
import toggleTimeframeSlice from "../reducers/toggleTimeframeSlice";
import inputDataSlice from "../reducers/inputDataSlice";
import futureWeatherDataSlice from "../reducers/futureWeatherData";

export const store = configureStore({
  reducer: {
    weatherData: weatherDataSlice,
    iconData: iconDataSlice,
    timeFrame: toggleTimeframeSlice,
    inputData: inputDataSlice,
    futureWeatherData: futureWeatherDataSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
