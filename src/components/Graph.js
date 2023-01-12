import React from "react";
import { useSelector } from "react-redux";
import Plot from "react-plotly.js";

const colors = {
  Mexico: "green",
  "New Zealand": "orange",
  Sweden: "blue",
  Thailand: "red",
};
const abbr = {
  Mexico: "MX",
  "New Zealand": "NZ",
  Sweden: "SE",
  Thailand: "TH",
};

// Graph/chart to display the data specified by the user
export default function Graph() {
  const data = useSelector((state) => state.data);
  const selection = useSelector((state) => state.selection);

  // Creates data structure for plotly.js
  const plotter = (data, country) => {
    return {
      ...data,
      name: window.innerWidth > 550 ? country : abbr[country],
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
  };

  // Updates plot when selection/data changes
  const [plottedData, setPlottedData] = React.useState([]);
  React.useEffect(() => {
    if (selection.length > 0) {
      setPlottedData(
        selection.map((country) => plotter(data[country], country))
      );
    } else {
      setPlottedData([]);
    }
    updateYAxis();
  }, [selection, data]);

  // Sets graph width based on initial window size
  const calculateWidth = () => {
    if (window.innerWidth <= 360) return 360;
    else if (window.innerWidth <= 800) return window.innerWidth;

    const lerpWidth = window.innerWidth + (window.innerWidth - 800) * 0.5;
    return Math.min(1300, lerpWidth);
  };

  return (
    <div id="plot-container">
      <Plot
        data={plottedData}
        layout={{
          width: calculateWidth(),
          xaxis: {
            range: [1980, 2021],
            title: {
              text: "Year",
              font: {
                family: "IBM Plex Sans Condensed",
                size: 18,
              },
            },
          },
          yaxis: {
            range: [0, yMax],
            title: {
              text: "Billion USD",
              font: {
                family: "IBM Plex Sans Condensed",
                size: 18,
              },
            },
          },
          title: {
            text:
              selection.length === 0
                ? "No countries selected"
                : selection.length === 1
                ? `GDP of ${selection[0]}`
                : `GDPs of ${selection
                    .map((country) =>
                      window.innerWidth > 650 ? country : abbr[country]
                    )
                    .join(", ")}`,
            font: {
              family: "IBM Plex Sans Condensed",
              size: 22,
            },
          },
        }}
      />
    </div>
  );
}
