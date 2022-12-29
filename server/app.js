const express = require("express");
const path = require("path");
const volleyball = require("volleyball");
const app = express();

app.use(express.static(path.join(__dirname, "..", "public")));

app.use(express.json());
app.use(volleyball);

app.use("/api", require("./api"));

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// Error handling here

module.exports = app;
