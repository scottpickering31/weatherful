import { createSlice } from "@reduxjs/toolkit";

const iconDataSlice = createSlice({
  name: "iconData",
  initialState: {
    iconData: "/images/placeholder-image.webp",
  },
  reducers: {
    setIconData: (state, action) => {
      state.iconData = action.payload;
    },
  },
});

export const { setIconData } = iconDataSlice.actions;
export default iconDataSlice.reducer;
