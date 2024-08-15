import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IconData {
  iconData: string;
  avatarIconData: string;
  iconArrayVisible: boolean;
}

const initialState: IconData = {
  iconData: "/avatars/placeholder-image.webp",
  avatarIconData: "",
  iconArrayVisible: false,
};

const iconDataSlice = createSlice({
  name: "iconData",
  initialState,
  reducers: {
    setIconData: (state, action: PayloadAction<string>) => {
      state.iconData = action.payload;
    },
    setIconArrayVisible: (state, action: PayloadAction<boolean>) => {
      state.iconArrayVisible = action.payload;
    },
    setAvatarIconData: (state, action: PayloadAction<string>) => {
      state.avatarIconData = action.payload;
    },
  },
});

export const { setIconData, setIconArrayVisible, setAvatarIconData } =
  iconDataSlice.actions;
export default iconDataSlice.reducer;
