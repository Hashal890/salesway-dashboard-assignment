const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  product: String,
  sold_amount: Number,
  unit_price: Number,
  revenue: Number,
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },
});

const ProductModel = mongoose.model("product", ProductSchema);

module.exports = ProductModel;
