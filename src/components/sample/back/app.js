const express = require("express");
const cors = require("cors");
const productRouter = require("./routes/productRoute")

const app = express();
app.use(express.json())
app.use(cors())
app.use("/product", productRouter)

module.exports = app;

