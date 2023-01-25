import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./slice/courseDataSlice";
import wishlistReducer from "./slice/wishlistSlice";

export const store = configureStore({
  reducer: {
    courses: dataReducer,
    course: wishlistReducer,
  },
});
