import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IconData {
  iconData: string;
}

const initialState: IconData = {
  iconData: "/images/placeholder-image.webp",
};

const iconDataSlice = createSlice({
  name: "iconData",
  initialState,
  reducers: {
    setIconData: (state, action: PayloadAction<string>) => {
      state.iconData = action.payload;
    },
  },
});

export const { setIconData } = iconDataSlice.actions;
export default iconDataSlice.reducer;
