import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lon: "",
  lat: "",
};

export const CoordinatesSlice = createSlice({
  name: "Coordinates",
  initialState,
  reducers: {
    saveCoordinates: (state, actions) => {
      state.lon = actions.payload;
      state.lat = actions.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveCoordinates } = CoordinatesSlice.actions;

export default CoordinatesSlice.reducer;
