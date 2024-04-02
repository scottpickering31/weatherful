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
<<<<<<< HEAD
    setLoggedIn: (state) => {
      state.loggedIn = !state.loggedIn;
=======
    setLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.loggedIn = action.payload;
>>>>>>> 131c7066d3be96613a09e0e84c34f1e13e30a55e
    },
  },
});

export const { setLoggedIn } = loggedInSlice.actions;
export default loggedInSlice.reducer;
