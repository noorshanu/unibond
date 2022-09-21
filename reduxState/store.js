import { configureStore } from "@reduxjs/toolkit";
import blackScreenSlice from "./slices/blackScreenSlice";
import loginScreenSlice from "./slices/loginScreenSlice";
import themeSlice from "./slices/themeSlice";
import chatModel from "./slices/chatModel";

export const store = configureStore({
  reducer: {
    blackScreenState: blackScreenSlice,
    loginScreenState: loginScreenSlice,
    themeState: themeSlice,
    chatModel,
  },
});
