import React from "react";
// components / redux
import { Error, Loading, Display, Selector } from "./components";
import { addData } from "./store/data";

export default function App() {
  return (
      <div>
        <h1>Placeholder header</h1>
        <Selector />
        <Display />
      </div>
    );
}
