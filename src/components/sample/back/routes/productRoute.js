const express = require("express");
const {getProducts} = require("./../controllers/productController")

const router = express.Router()

router.route("/getProducts").get(getProducts)
// router.route("/getProduct/:id").get(getProducts)

module.exports = router

