import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../store/data";
import { toggleCountry } from "../store/selection";
import countries from "../../availableCountries.json";

// dropdown selection for countries/indicators
export default function Selector() {
  const dispatch = useDispatch();
  const selection = useSelector(state => state.selection);
  
  const [country, selectCountry] = React.useState("");
  
  const handleChange = (e) => {
    // console.log(e.target.checked);
    dispatch(toggleCountry(e.target.id));
  }

  return (
    <div id="selection-container">
      <h3>Select countries to compare GDPs</h3>
      <div id="all-countries-checkboxes">
        <div className="single-country-checkbox-container">  
          <input type="checkbox" id="Mexico" onChange={handleChange} defaultChecked/>
          <label>Mexico</label>
        </div>
        
        <div className="single-country-checkbox-container">  
          <input type="checkbox" id="New Zealand" onChange={handleChange}/>
          <label>New Zealand</label>
        </div>
        
        <div className="single-country-checkbox-container">  
          <input type="checkbox" id="Sweden" onChange={handleChange}/>
          <label>Sweden</label>
        </div>
        
        <div className="single-country-checkbox-container">  
          <input type="checkbox" id="Thailand" onChange={handleChange}/>
          <label>Thailand</label>
        </div>
      </div>
    </div>
  );
}
