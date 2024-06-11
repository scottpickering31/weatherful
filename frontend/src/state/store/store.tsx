import { configureStore } from "@reduxjs/toolkit";
import weatherDataSlice from "../reducers/weatherDataSlice";
import iconDataSlice from "../reducers/iconDataSlice";
import toggleTimeframeSlice from "../reducers/toggleTimeframeSlice";
import inputDataSlice from "../reducers/inputDataSlice";
import loggedInSlice from "../reducers/loggedInSlice";
import userInfoSlice from "../reducers/userInfoSlice";


export const store = configureStore({
  reducer: {
    loggedIn: loggedInSlice,
    weatherData: weatherDataSlice,
    iconData: iconDataSlice,
    timeFrame: toggleTimeframeSlice,
    inputData: inputDataSlice,
    userInfo: userInfoSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
