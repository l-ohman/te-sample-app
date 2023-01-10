import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const data = createSlice({
  name: "data",
  initialState: [],
  reducers: {
    addData: (state, action) => {
      const data = action.payload;
      state[data.country][data.indicator] = data.data;
      return state;
    },
  },
});

export default data.reducer;

const { addData } = data.actions;
export const fetchData = (country, indicator) => async (dispatch) => {
  const data = await axios.get(`/api/${country}/${indicator}`);

  if (Object.keys(data).length > 0) {
    addData(data);
  } else {
    console.error("Unable to fetch any data");
  }
};
