import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: false,
};

export const loginScreenSlice = createSlice({
  name: "loginScreenState",
  initialState,
  reducers: {
    toggleState: (state, action) => {
      state.show = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleState } = loginScreenSlice.actions;

export default loginScreenSlice.reducer;
