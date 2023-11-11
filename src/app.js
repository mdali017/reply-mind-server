const express = require("express");
const cors = require("cors");
const marketingRoute = require("../routes/marketingRoute");
const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome To The Server.",
  });
});

// marketing related route
app.use("/api/data", marketingRoute);

app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found.",
  });
  next();
});

app.use((err, req, res, next) => {
  res.status(500).json({
    success: false,
    message: "Someting Wrong.. Please Try Again...",
  });
});

module.exports = app;
