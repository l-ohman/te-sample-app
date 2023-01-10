require("dotenv").config();
const router = require("express").Router();
const te = require("tradingeconomics");
// Available countries with free key: Mexico, Sweden, Thailand, New Zealand
const countries = ["Mexico", "Sweden", "Thailand", "New Zealand"];
const indicators = require("../indicatorList.json");

router.get("/:country/:indicator", async (req, res) => {
  try {
    await te.login(process.env.API_KEY || "guest:guest");
    
    const data = await te.getIndicatorData(country=req.country, group=req.indicator);
    
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
