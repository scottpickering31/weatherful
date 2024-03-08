import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  city: "London",
};

const inputDataSlice = createSlice({
  name: "inputData",
  initialState,
  reducers: {
    setInputData: (state, action) => {
      state.city = action.payload;
    },
  },
});

export const { setInputData } = inputDataSlice.actions;
export default inputDataSlice.reducer;
