const express = require("express")
const app = express.Router()

const brandController = require("../controllers/brand");

app.get("/",brandController.getBrands);

app.post("/",brandController.createBrand);

app.delete("/",brandController.deleteBrand);

module.exports = app;