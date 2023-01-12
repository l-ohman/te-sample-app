import React from "react";
import { Graph, Selector, Footer } from "./components";

export default function App() {
  return (
    <>
      <div id="content-container">
        <h1 id="page-header">Trading Economics Sample Application</h1>
        <Selector />
        <Graph />
      </div>
      <Footer />
    </>
  );
}
