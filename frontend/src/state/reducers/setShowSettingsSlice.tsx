import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ShowSettingsSlice {
  showSettings: boolean;
}

const initialState: ShowSettingsSlice = {
  showSettings: false,
};

const showSettingsSlice = createSlice({
  name: "showSettings",
  initialState,
  reducers: {
    setShowSettings: (state, action: PayloadAction<boolean>) => {
      state.showSettings = action.payload;
    },
  },
});

export const { setShowSettings } = showSettingsSlice.actions;
export default showSettingsSlice.reducer;
