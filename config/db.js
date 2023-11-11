const mongoose = require("mongoose");
const { mongodbURL } = require("../secret");

const connectDatabase = async () => {
  try {
    await mongoose.connect(mongodbURL);
    console.log("Mongodb Connection is Successfully..");
  } catch (error) {
    console.error("Cound not connect to DB:", error.toString());
  }
};

module.exports = connectDatabase;
