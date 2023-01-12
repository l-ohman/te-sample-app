import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../store/data";
import { selectCountry, unselectCountry } from "../store/selection";

// Dropdown selection for countries/indicators
export default function Selector() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.data);
  
  const handleChange = async (e) => {
    e.target.checked ? dispatch(selectCountry(e.target.id)) : dispatch(unselectCountry(e.target.id));
    
    // If the store does not yet have the data, retrieve it from the API
    if (Object.keys(data[e.target.id]).length === 0) {
      await dispatch(fetchData(e.target.id));
    }
  }

  return (
    <div id="selection-container">
      <h3>Select countries to compare GDPs</h3>
      <div id="all-countries-checkboxes">
        <div className="single-country-checkbox-container">  
          <input type="checkbox" id="Mexico" onChange={handleChange}/>
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
