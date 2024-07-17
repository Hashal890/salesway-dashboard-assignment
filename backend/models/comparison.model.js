const mongoose = require("mongoose");

const ComparisonSchema = new mongoose.Schema({
  month: String,
  lastYear: Number,
  thisYear: Number,
});

const ComparisonModel = mongoose.model("comparison", ComparisonSchema);

module.exports = ComparisonModel;
