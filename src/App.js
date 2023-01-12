import React from "react";
import { Error, Loading, Graph, Selector } from "./components";

export default function App() {
  return (
      <>
        <h1 id="page-header">Trading Economics Sample Application</h1>
        <Selector />
        <Graph />
        {/* <Footer /> */}
      </>
    );
}
