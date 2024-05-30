import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SignUpData {
  signUpData: string[];
}

const initialState: SignUpData = {
  signUpData: [],
};

const signUpDataSlice = createSlice({
  name: "signUpData",
  initialState,
  reducers: {
    setSignUpData: (state, action: PayloadAction<string[]>) => {
      state.signUpData = [...state.signUpData, ...action.payload];
    },
  },
});

export const { setSignUpData } = signUpDataSlice.actions;
export default signUpDataSlice.reducer;
