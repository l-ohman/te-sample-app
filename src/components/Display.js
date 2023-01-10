import React from "react";
import { useSelector } from "react-redux";
import Plot from 'react-plotly.js';

// graph/chart to display the data specified by the user
export default function Display() {
  const data = useSelector(state=>state);
  
  return (
    <div>
      <h3>Graph</h3>
      <Plot
        data={[
          {
            ...data.Mexico.GDP,
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          },
        ]}
        // layout={ {width: "100%", height: "100%"} }
      />
    </div>
  );
}
