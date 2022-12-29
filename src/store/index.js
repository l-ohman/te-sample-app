import { configureStore } from "@reduxjs/toolkit";
import loggerMiddleware from "redux-logger";
import data from "./data";

export default configureStore({
    reducer: data,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(loggerMiddleware)
});
