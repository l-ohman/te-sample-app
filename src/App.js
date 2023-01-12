import React from "react";
import { Error, Loading, Display, Selector } from "./components";

export default function App() {
  return (
      <div>
        <h1>Trading Economics — Sample Application</h1>
        <Selector />
        <Display />
      </div>
    );
}
