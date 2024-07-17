const express = require("express");
const ProductModel = require("../models/top-products.model");

const topProductsRouter = express.Router();

topProductsRouter.get("/", async (req, res) => {
  try {
    const topProductsData = await ProductModel.find();
    res
      .status(200)
      .json({ message: "Found all top products data!", topProductsData });
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

topProductsRouter.post("/", async (req, res) => {
  try {
    const newTopProduct = req.body;
    const newTopProductDatabaseUpload = new ProductModel(newTopProduct);
    await newTopProductDatabaseUpload.save();
    res.status(200).json({ message: "Top product addded!", newTopProduct });
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

module.exports = topProductsRouter;
