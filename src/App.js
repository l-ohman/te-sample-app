import React from "react";
// components / redux
import { Error, Loading, Display, Selector } from "./components";
import { addData } from "./store/data";

export default function App() {
  return (
      <div>
        <h1>TradingEconomics - Sample Application</h1>
        <Selector />
        <Display />
      </div>
    );
}
