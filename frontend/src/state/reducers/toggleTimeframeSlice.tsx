import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeTimeFrame: "daily",
};

const toggleTimeframeSlice = createSlice({
  name: "timeFrame",
  initialState,
  reducers: {
    setActiveTimeFrame: (state, action) => {
      state.activeTimeFrame = action.payload;
    },
  },
});

export const { setActiveTimeFrame } = toggleTimeframeSlice.actions;
export default toggleTimeframeSlice.reducer;
