import { configureStore } from "@reduxjs/toolkit";
import CoordinatesSlice from "./CoordinatesSlice";

export const store = configureStore({
  reducer: {
    Coordinates: CoordinatesSlice,
  },
});
