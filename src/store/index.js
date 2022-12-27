import { configureStore } from "@reduxjs/toolkit";
import loggerMiddleware from "redux-logger";
// import slice from "./slice";

export default configureStore({
    reducer: {},
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(loggerMiddleware)
});
