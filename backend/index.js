const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongooseConnect = require("./config/db.config");
const comparisonRouter = require("./routes/comparison.routes");
const topProductsRouter = require("./routes/top-products.routes");

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to my salesway backend project!" });
});

app.use("/comparison", comparisonRouter);
app.use("/top-products", topProductsRouter);

app.listen(PORT, async () => {
  await mongooseConnect();
  console.log(`http://localhost:${PORT}`);
});
