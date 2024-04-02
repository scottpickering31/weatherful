import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TimeFrame = "hourly" | "daily";

const initialState: { activeTimeFrame: TimeFrame } = {
  activeTimeFrame: "daily",
};

const toggleTimeframeSlice = createSlice({
  name: "timeFrame",
  initialState,
  reducers: {
    setActiveTimeFrame: (state, action: PayloadAction<TimeFrame>) => {
      state.activeTimeFrame = action.payload;
    },
  },
});

export const { setActiveTimeFrame } = toggleTimeframeSlice.actions;
export default toggleTimeframeSlice.reducer;
