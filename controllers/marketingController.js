const marketingData = require("../models/marketingModel");

// Get All Data /api/data
const getAllData = async (req, res) => {
  const result = await marketingData.find();
  res.send(result);
};

// Get A Single Data using by id /api/data/id
const getSingleData = async (req, res) => {
  const id = req.params.id;
  const query = { _id: id };
  const result = await marketingData.findById(query);
  res.send(result);
};

// Create a Data and insert Database
const createAData = async (req, res) => {
  const data = req.body;
  const result = await marketingData.create(data);
  res.send(result);
};

const updateAData = async (req, res) => {
  const id = req.params.id;
  const query = { _id: id };
  const updateDoc = {
    $set: {
      name: req.body.name,
      category: req.body.category,
      weekly_coast: req.body.weekly_coast,
      total_employee: req.body.total_employee,
      revenue: req.body.revenue,
    },
  };
  const result = await marketingData.updateOne(query, updateDoc);
  res.send(result);
};

// Delete a document from the data
const deleteAData = async (req, res) => {
  const id = req.params.id;
  const query = { _id: id };
  const result = await marketingData.deleteOne(query);
  res.send(result);
};

module.exports = {
  getAllData,
  getSingleData,
  createAData,
  updateAData,
  deleteAData,
};
