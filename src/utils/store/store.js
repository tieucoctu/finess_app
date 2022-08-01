import { configureStore } from "@reduxjs/toolkit";
import commomSlice from "./reducers/commomSlice";

export const store = configureStore({
  reducer: {
    common: commomSlice,
  },
});
