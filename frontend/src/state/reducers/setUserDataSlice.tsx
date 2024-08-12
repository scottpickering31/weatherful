import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserData {
  user_id: number;
  name: string;
  email: string;
  password: string;
}

interface UserDataState {
  userData: UserData;
}

const initialState: UserDataState = {
  userData: {
    user_id: 0,
    name: "",
    email: "",
    password: "",
  },
};

const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<UserData>) => {
      state.userData = action.payload;
    },
    updateUserField: (
      state,
      action: PayloadAction<{ field: keyof UserData; newValue: string }>
    ) => {
      const { field, newValue } = action.payload;
      state.userData[field] = newValue;
    },
  },
});

export const { setUserData, updateUserField } = userDataSlice.actions;
export default userDataSlice.reducer;
