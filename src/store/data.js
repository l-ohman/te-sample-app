import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import { countries } from "../../availableQueries.json";

const data = createSlice({
  name: "data",
  initialState: {
    "Mexico": {},
    "Sweden": {},
    "Thailand": {},
    "New Zealand": {},
  },
  reducers: {
    addData: (state, action) => {
      const data = action.payload;
      state[data.country][data.indicator] = data.res;
      return state;
    },
  },
});

export default data.reducer;

const { addData } = data.actions;
export const fetchData = (country, indicator) => async (dispatch) => {
  const { data } = await axios.get(`/api/${country}/${indicator}`);
  // restructuring data from API to be graphed
  const restructuredData = {
    x: [],
    y: []
  };
  for (let i = 0; i < data.length; i++) {
    if (data[i].Value === 0) continue;
    
    // year: String, value: Number
    restructuredData.x.push(data[i].DateTime.slice(0, 4));
    restructuredData.y.push(data[i].Value);
  }

  dispatch(addData({
    res: restructuredData,
    country,
    indicator,
  }));
};
