import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IconData {
  iconData: string;
  iconArrayVisible: boolean;
}

const initialState: IconData = {
  iconData: "/avatars/placeholder-image.webp",
  iconArrayVisible: false,
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
