import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// just using general 'data' until i have a specific idea of what data is needed
const data = createSlice({
  name: "data",
  initialState: [],
  reducers: {
    addData: (state, action) => {
      return state[action.payload.country][action.payload.category] = action.payload.data;
    },
  },
});

export default data.reducer;
export const { addData } = data.actions;
