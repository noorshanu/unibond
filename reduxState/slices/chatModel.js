import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modelState: false,
};

export const chatModel = createSlice({
  name: "modelState",
  initialState,
  reducers: {
    toggleModel: (state, action) => {
      state.modelState = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleModel } = chatModel.actions;

export default chatModel.reducer;
