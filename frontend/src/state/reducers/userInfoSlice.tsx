import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface userInfo {
  userInfo: string[];
}

const initialState: userInfo = {
  userInfo: [],
};

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<string[]>) => {
      state.userInfo = action.payload;
    },
  },
});

export const { setUserInfo } = userInfoSlice.actions;
export default userInfoSlice.reducer;
