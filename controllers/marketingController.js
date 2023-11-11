const marketingData = require("../models/marketingModel");
const getAllData = async (req, res) => {
  const result = await marketingData.find();
  res.send(result);
};
const getSingleData = async (req, res) => {
  const id = req.params.id;
  const query = { _id: id };
  const result = await marketingData.findById(query);
  res.send(result);
};
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
