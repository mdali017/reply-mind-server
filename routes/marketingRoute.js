const express = require("express");
const {
  createAData,
  getAllData,
  getSingleData,
  deleteAData,
  updateAData,
} = require("../controllers/marketingController");
const marketingRoute = express.Router();

// marketing Route
marketingRoute.get("/", getAllData);
marketingRoute.get("/:id", getSingleData);
marketingRoute.post("/", createAData);
marketingRoute.patch("/:id", updateAData);
marketingRoute.delete("/:id", deleteAData);

module.exports = marketingRoute;
