import { configureStore } from "@reduxjs/toolkit";
import loggerMiddleware from "redux-logger";
import data from "./data";
import selection from "./selection";

export default configureStore({
    reducer: { data, selection },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(loggerMiddleware)
});
