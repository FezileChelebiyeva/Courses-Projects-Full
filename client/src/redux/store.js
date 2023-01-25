import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./slice/courseDataSlice";

export const store = configureStore({
  reducer: {
    courses: dataReducer,
  },
});
