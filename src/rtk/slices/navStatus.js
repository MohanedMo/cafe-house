import { createSlice } from "@reduxjs/toolkit";

const navStatus = createSlice({
  initialState: false,
  name: "navStatus",
  reducers: {
    toggleNav: (state, action) => {
      return !state;
    },
    hideNav: (state, action) => {
      state = false;
      return state;
    },
  },
});

export const { toggleNav, hideNav } = navStatus.actions;
export default navStatus.reducer;
