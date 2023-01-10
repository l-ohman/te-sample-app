require("dotenv").config();
const router = require("express").Router();
const te = require("tradingeconomics");
// Available countries with free key: Mexico, Sweden, Thailand, New Zealand
const availableCountries = ["Mexico", "Sweden", "Thailand", "New Zealand"];

router.get("/data", async (req, res) => {
  try {
    await te.login(process.env.API_KEY || "guest:guest");
    
    let data = await te.getIndicatorData(country=availableCountries);
    
    function removeIndicatorsWithoutAllCountries(data) {
      let counter = 0
      let currentCategory = ""
      const categories = [];
      
      for (let i = 0; i < data.length; i++) {
        if (data[i].Category === currentCategory) {
          counter += 1
        } else {
          if (counter === 4) categories.push(currentCategory);
          currentCategory = data[i].Category;
          counter = 1;
        }
      }
      return categories;
    }
    
    data = removeIndicatorsWithoutAllCountries(data);
    // const data = await te.getIndicatorData(indicator="Coronavirus Cases");
    // const data = await te.getIndicatorData(indicator="Corruption Rank");
    
    // gets list of companies in a specific countries
    // const data = await te.getFinancialsData(country="China");
    
    res.send(data);
  } catch (e) {
    console.error(e);
  }
});

module.exports = router;
