import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface userData {
  userData: {
    id: number;
    name: string;
    email: string;
    password: string;
  };
}

const initialState: userData = {
  userData: {
    id: 0,
    name: "",
    email: "",
    password: "",
  },
};

const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    setuserData: (state, action: PayloadAction<userData>) => {
      state.userData = action.payload;
    },
  },
});

export const { setuserData } = userDataSlice.actions;
export default userDataSlice.reducer;
