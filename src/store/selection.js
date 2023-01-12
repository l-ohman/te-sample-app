import { createSlice } from "@reduxjs/toolkit";

// manages which countries the user has selected to display
const selection = createSlice({
  name: "selection",
  initialState: [],
  reducers: {
    selectCountry: (state, action) => {
      state.push(action.payload);
      return state;
    },
    unselectCountry: (state, action) => {
      const countryIdx = state.indexOf(action.payload);
      state.splice(countryIdx, 1);
      return state;
    }
  },
});

export default selection.reducer;
export const { selectCountry, unselectCountry } = selection.actions;
