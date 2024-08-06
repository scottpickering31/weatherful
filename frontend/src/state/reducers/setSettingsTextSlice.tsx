import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface settingsTextSlice {
  settingsText: string;
}

const initialState: settingsTextSlice = {
  settingsText: "Profile",
};

const settingsTextSlice = createSlice({
  name: "settingsText",
  initialState,
  reducers: {
    setSettingsText: (state, action: PayloadAction<string>) => {
      state.settingsText = action.payload;
    },
  },
});

export const { setSettingsText } = settingsTextSlice.actions;
export default settingsTextSlice.reducer;
