import { createSlice } from "@reduxjs/toolkit";

const iconDataSlice = createSlice({
    name: "iconData",
    initialState: {
        iconData: null,
    },
    reducers: {
        setIconData: (state, action) => {
            state.iconData = action.payload;
        },
    },
});

export const { setIconData } = iconDataSlice.actions;
export default iconDataSlice.reducer;