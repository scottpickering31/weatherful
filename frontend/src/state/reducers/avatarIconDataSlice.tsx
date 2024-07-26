import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface avatarIconData {
  avatarIconData: string;
  iconArrayVisible: boolean;
}

const initialState: avatarIconData = {
  avatarIconData: "",
  iconArrayVisible: false,
};

const avatarIconDataSlice = createSlice({
  name: "avatarIconData",
  initialState,
  reducers: {
    setAvatarIconData: (state, action: PayloadAction<string>) => {
      state.avatarIconData = action.payload;
    },
    setIconArrayVisible: (state, action: PayloadAction<boolean>) => {
      state.iconArrayVisible = action.payload;
    },
  },
});

export const { setAvatarIconData, setIconArrayVisible } =
  avatarIconDataSlice.actions;
export default avatarIconDataSlice.reducer;
