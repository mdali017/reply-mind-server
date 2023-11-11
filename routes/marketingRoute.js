const express = require("express");
const {
  createAData,
  getAllData,
  getSingleData,
} = require("../controllers/marketingController");
const marketingRoute = express.Router();

// marketing Route
marketingRoute.get("/", getAllData);
marketingRoute.get("/:id", getSingleData);
marketingRoute.post("/", createAData);

module.exports = marketingRoute;
