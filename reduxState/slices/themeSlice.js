import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDark: false,
};

export const themeSlice = createSlice({
  name: "theme-changer",
  initialState,
  reducers: {
    toggleTheme: (state, action) => {
      state.isDark = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
