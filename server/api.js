require("dotenv").config();
const router = require("express").Router();
const te = require("tradingeconomics");
// Available countries with free key: Mexico, Sweden, Thailand, New Zealand
const countries = require("../availableCountries.json");

router.get("/:country/:indicator", async (req, res) => {
  try {
    await te.login(process.env.API_KEY || "guest:guest");
    const data = await te.getHistoricalData(
      country=req.params.country,
      indicator="GDP",
      start_date="1990-01-01"
    );
    res.send(data);
  } catch (e) {
    console.error(e);
  }
});

module.exports = router;
