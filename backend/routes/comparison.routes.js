const express = require("express");
const ComparisonModel = require("../models/comparison.model");

const comparisonRouter = express.Router();

comparisonRouter.get("/", async (req, res) => {
  try {
    const comparisonData = await ComparisonModel.find();
    res.status(200).json({ message: "Found all comparison data!", comparisonData });
  } catch (error) {
    res.status(400).json({ error });
  }
});

comparisonRouter.post("/", async (req, res) => {
  try {
    const newComparison = req.body;
    const comparison = new ComparisonModel(newComparison);
    await comparison.save();
    res.status(200).json({ message: "Comparison addded!", newComparison });
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

module.exports = comparisonRouter;
