import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const data = createSlice({
    name: "data",
    initialState: {},
    reducers: {
        setData: (state, action) => action.payload,
    }
});

export default data.reducer;
