import React from "react";
import { useSelector } from "react-redux";
import Plot, { Layout } from 'react-plotly.js';

// graph/chart to display the data specified by the user
export default function Display() {
  const allData = useSelector(state => state.data);
  const selection = useSelector(state => state.selection);
  
  const colorSelection = (country) => {
    switch (country) {
      case "Mexico":
        return "green";
      case "New Zealand":
        return "orange";
      case "Sweden":
        return "blue";
      case "Thailand":
        return "red";
    }
  };
  
  const plotter = (data, country) => {
    return {
      data,
      type: "scatter",
      mode: "lines+markers",
      marker: {color: colorSelection(country)},
    };
  };
  
  return (
    <div>
      <h3>Graph</h3>
      {/* <Plot
        data={a}
        layout={{
          xaxis: {range: [1990,2021]},
          yaxis: {range: [0, 5000]},
        }}
      /> */}
    </div>
  );
}
