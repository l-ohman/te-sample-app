import React from "react";
import { useSelector } from "react-redux";
import Plot from "react-plotly.js";

// Graph/chart to display the data specified by the user
export default function Display() {
  const data = useSelector((state) => state.data);
  const selection = useSelector((state) => state.selection);

  const colors = {
    Mexico: "green",
    "New Zealand": "orange",
    Sweden: "blue",
    Thailand: "red",
  };

  const plotter = (data, country) => {
    return {
      ...data,
      type: "scatter",
      mode: "lines+markers",
      marker: { color: colors[country] },
    };
  };

  const [plottedData, setPlottedData] = React.useState([]);
  React.useEffect(() => {
    if (selection.length > 0) {
      setPlottedData(selection.map((country) => plotter(data[country], country)));
    } else {
      setPlottedData([]);
    }
  }, [selection]);

  return (
    <div>
      <h3>Graph</h3>
      <Plot
        data={plottedData}
        layout={{
          xaxis: { range: [1990, 2021] },
          yaxis: { range: [0, 1000] },
        }}
      />
    </div>
  );
}
