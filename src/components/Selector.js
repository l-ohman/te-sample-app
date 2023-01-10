import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../store/data";
import queries from "../../availableQueries.json";

// dropdown selection for countries/indicators
export default function Selector() {
  const dispatch = useDispatch();
  
  const [country, selectCountry] = React.useState("");
  const [indicator, selectIndicator] = React.useState("");

  const handleChange = (e) => {
    if (e.target.name === "country") {
      selectCountry(e.target.value);
    } else {
      selectIndicator(e.target.value);
    }
  };

  const handleClick = async() => {
    if (country && indicator) {
      console.log(`Querying for ${indicator} of ${country}`);
       await dispatch(fetchData(country, indicator));
    } else {
      alert(country ? "No indicator selected" : "No country selected");
    }
  };

  return (
    <div>
      <h3>Selector</h3>
      <select name="country" onChange={handleChange} value={country}>
        <option value="">- Select a country -</option>
        {queries.countries.map((country, idx) => (
          <option value={country} key={idx}>
            {country}
          </option>
        ))}
      </select>

      <select name="indicator" onChange={handleChange} value={indicator}>
        <option value="">- Select a category -</option>
        {queries.indicators.map((category, idx) => (
          <option value={category} key={idx}>
            {category}
          </option>
        ))}
      </select>
      <button onClick={handleClick}>Add data to chart</button>
    </div>
  );
}
