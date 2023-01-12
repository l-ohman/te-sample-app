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

  // Creates data structure for plotly.js
  const plotter = (data, country) => {
    return {
      ...data,
      name: country,
      type: "scatter",
      mode: "lines+markers",
      marker: { color: colors[country] },
      showlegend: true,
    };
  };

  // Scales y-axis with selection
  const [yMax, setYMax] = React.useState(300);
  const updateYAxis = () => {
    let highestGDPInSelection = 300;
    for (let i = 0; i < selection.length; i++) {
      if (data[selection[i]].y) {
        const currentGDP = Math.max(...data[selection[i]].y) * 1.1;
        if (currentGDP > highestGDPInSelection) {
          highestGDPInSelection = currentGDP;
        }
      }
    }
    setYMax(highestGDPInSelection);
  }

  // Updates plot when selection/data changes
  const [plottedData, setPlottedData] = React.useState([]);
  React.useEffect(() => {
    if (selection.length > 0) {
      setPlottedData(selection.map((country) => plotter(data[country], country)));
    } else {
      setPlottedData([]);
    }
    updateYAxis();
  }, [selection, data]);

  return (
    <div id="plot-container">
      <Plot
        data={plottedData}
        layout={{
          xaxis: { 
            range: [1980, 2021],
            title: {
              text: "Year",
              font: {
                family: "IBM Plex Sans Condensed",
                size: 18,
              }
            }
          },
          yaxis: {
            range: [0, yMax],
            title: {
              text: "Billion USD",
              font: {
                family: "IBM Plex Sans Condensed",
                size: 18,
              }
            }
          },
          title: {
            text: selection.length===0 ? "No countries selected" :
              selection.length===1 ? `GDP of ${selection[0]}` :
              `Comparing GDPs of ${selection.join(", ")}`,
            font: {
              family: "IBM Plex Sans Condensed",
              size: 22,
            }
          }
        }}
      />
    </div>
  );
}
