import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: false,
};

export const blackScreenSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    toggleState: (state, action) => {
      state.show = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleState } = blackScreenSlice.actions;

export default blackScreenSlice.reducer;
