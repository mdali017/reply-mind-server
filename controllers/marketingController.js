const marketingData = require("../models/marketingModel");
const getAllData = async (req, res) => {};
const getSingleData = async (req, res) => {};
const createAData = async (req, res) => {
  const data = req.body;
  const result = await marketingData.create(data);
  res.send(result);
};
const updateAData = async (req, res) => {};
const deleteAData = async (req, res) => {};

module.exports = {
  getAllData,
  getSingleData,
  createAData,
  updateAData,
  deleteAData,
};
