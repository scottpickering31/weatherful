import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InputData {
  city: string;
}

const initialState: InputData = {
  city: "",
};

const inputDataSlice = createSlice({
  name: "inputData",
  initialState,
  reducers: {
    setInputData: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
  },
});

export const { setInputData } = inputDataSlice.actions;
export default inputDataSlice.reducer;
