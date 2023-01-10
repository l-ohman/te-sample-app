require("dotenv").config();
const router = require("express").Router();
const te = require("tradingeconomics");
// Available countries with free key: Mexico, Sweden, Thailand, New Zealand
const queries = require("../availableQueries.json");
const countries = queries.countries;
const indicators = queries.indicators;

router.get("/:country/:indicator", async (req, res) => {
  try {
    await te.login(process.env.API_KEY || "guest:guest");
    
    const data = await te.getIndicatorData(country=req.params.country, group=req.params.indicator);
    // const data = await te.getIndicatorData(country=req.params.country, group=req.params.indicator);
    // const data = await te.getIndicatorData(country="Mexico", indicator="GDP from Agriculture");
    console.log(data);
    
    res.send(data);
  } catch (e) {
    console.error(e);
  }
});

module.exports = router;
