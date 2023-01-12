import { createSlice } from "@reduxjs/toolkit";

// manages which countries the user has selected to display
const selection = createSlice({
  name: "selection",
  initialState: {
    "Mexico": true,
    "New Zealand": false,
    "Sweden": false,
    "Thailand": false,
  },
  reducers: {
    toggleCountry: (state, action) => {
      state[action.payload] = !state[action.payload];
      return state;
    },
  },
});

export default selection.reducer;
export const { toggleCountry } = selection.actions;
