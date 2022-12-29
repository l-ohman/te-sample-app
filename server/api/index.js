require("dotenv").config();
const router = require("express").Router();
const te = require("tradingeconomics");
// simulating a real API, but fetching data from te instead

async function initData() {
    await te.login(process.env.API_KEY || "guest:guest");
}

// initData();

module.exports = router;
