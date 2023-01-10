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
      state[data.country][data.indicator] = data.data;
      return state;
    },
  },
});

export default data.reducer;

const { addData } = data.actions;
export const fetchData = (country, indicator) => async (dispatch) => {
  // must convert indicator to slug to make API call
  // indicator = indicator.split(" ").join("_");
  let { data } = await axios.get(`/api/${country}/${indicator}`);
  data = {
    data,
    country,
    indicator,
  };

  if (Object.keys(data).length > 0) {
    dispatch(addData(data));
    return data;
  } else {
    console.error("Unable to fetch any data");
  }
};
