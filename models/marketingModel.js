const mongoose = require("mongoose");
const { Schema } = mongoose;

const dataShema = new Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  weekly_coast: { type: Number, required: true },
  total_employee: { type: Number, required: true },
  revenue: { type: Number, required: true },
});

const marketingData = mongoose.model("marketingData", dataShema);

module.exports = marketingData;
