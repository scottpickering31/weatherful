import { createSlice } from "@reduxjs/toolkit";

const futureWeatherDataSlice = createSlice({
  name: "futureWeatherData",
  initialState: {
    futureWeatherData: [],
  },
  reducers: {
    setFutureWeatherData: (state, action) => {
      state.futureWeatherData = action.payload;
    },
  },
});

export const { setFutureWeatherData } = futureWeatherDataSlice.actions;
export default futureWeatherDataSlice.reducer;
