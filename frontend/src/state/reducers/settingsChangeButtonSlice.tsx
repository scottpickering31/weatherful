import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SettingsChangeButton {
  settingsChange: string;
}

const initialState: SettingsChangeButton = {
  settingsChange: "",
};

const SettingsChangeButton = createSlice({
  name: "settingsChange",
  initialState,
  reducers: {
    setsettingsChange: (state, action: PayloadAction<string>) => {
      state.settingsChange = action.payload;
    },
  },
});

export const { setsettingsChange } = SettingsChangeButton.actions;
export default SettingsChangeButton.reducer;
