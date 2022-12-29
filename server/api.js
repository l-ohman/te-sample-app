require("dotenv").config();
const router = require("express").Router();
const te = require("tradingeconomics");
// simulating a real API, but fetching data from te instead

router.get("/data", async (req, res) => {
    try {
        await te.login(process.env.API_KEY || "guest:guest");
        const data = await te.getAllCountries();
        res.send(data);
    } catch(e) {
        console.error(e);
    }
});

module.exports = router;
