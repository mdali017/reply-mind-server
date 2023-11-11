const express = require("express");
const { createAData } = require("../controllers/marketingController");
const marketingRoute = express.Router();

// marketing Route
marketingRoute.post("/", createAData);

module.exports = marketingRoute;
