import { createSlice } from "@reduxjs/toolkit";
import te from "tradingeconomics";

const data = createSlice({
  name: "data",
  initialState: {
    Mexico: {},
    Sweden: {},
    Thailand: {},
    "New Zealand": {},
  },
  reducers: {
    addData: (state, action) => {
      state[action.payload.country] = action.payload.data;
      return state;
    },
  },
});

export default data.reducer;

const { addData } = data.actions;
export const fetchData = (inputCountry, inputIndicator = "GDP") => async (dispatch) => {
  try {
    await te.login(process.env.API_KEY || "guest:guest");
    const data = await te.getHistoricalData(
      country = inputCountry,
      indicator = inputIndicator,
      start_date = "1980-01-01"
    );
    // restructuring data from API to be graphed
    const restructuredData = {
      x: [],
      y: [],
    };
    for (let i = 0; i < data.length; i++) {
      if (data[i].Value === 0) continue;

      // year: Number, value: Number
      restructuredData.x.push(Number(data[i].DateTime.slice(0, 4)));
      restructuredData.y.push(data[i].Value);
    }

    dispatch(
      addData({
        data: restructuredData,
        country: inputCountry,
      })
    );
  } catch (e) {}
};
