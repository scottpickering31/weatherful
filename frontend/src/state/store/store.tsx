import { configureStore } from "@reduxjs/toolkit";
import weatherDataSlice from "../reducers/weatherDataSlice";
import iconDataSlice from "../reducers/iconDataSlice";

export const store = configureStore({
  reducer: {
    weatherData: weatherDataSlice,
    iconData: iconDataSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
