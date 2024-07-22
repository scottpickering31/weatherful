import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TemporaryUserInfo {
  temporaryUserInfo: string[];
}

const initialState: TemporaryUserInfo = {
  temporaryUserInfo: ,
};

const temporaryUserInfoSlice = createSlice({
  name: "temporaryUserInfo",
  initialState,
  reducers: {
    setTemporaryUserInfo: (state, action: PayloadAction<string[]>) => {
      state.temporaryUserInfo = [...state.temporaryUserInfo, ...action.payload];
    },
  },
});

export const { setTemporaryUserInfo } = temporaryUserInfoSlice.actions;
export default temporaryUserInfoSlice.reducer;
