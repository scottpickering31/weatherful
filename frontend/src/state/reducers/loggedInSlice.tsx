import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LoggedIn {
  loggedIn: boolean;
}

const initialState: LoggedIn = {
  loggedIn: true,
};

const loggedInSlice = createSlice({
  name: "loggedIn",
  initialState,
  reducers: {
    setLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.loggedIn = action.payload;
    },
  },
});

export const { setLoggedIn } = loggedInSlice.actions;
export default loggedInSlice.reducer;
