import React from "react";
import { Routes, Route } from "react-router-dom";

export default function Router() {
    return(
        <Routes>
            <Route index path="/" element={<></>} />
        </Routes>
    )
}