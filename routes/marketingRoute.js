const express = require("express");
const {
  createAData,
  getAllData,
} = require("../controllers/marketingController");
const marketingRoute = express.Router();

// marketing Route
marketingRoute.get("/", getAllData);
marketingRoute.post("/", createAData);

module.exports = marketingRoute;
