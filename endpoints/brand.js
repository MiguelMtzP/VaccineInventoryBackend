const express = require("express")
const app = express.Router()

const brandController = require("../controllers/brand");
const Authenticator = require("../middlewares/Authenticator");

app.get("/",brandController.getBrands);

app.post("/",Authenticator.authenticate("jwt",{session:false}),brandController.createBrand);

app.delete("/",brandController.deleteBrand);

module.exports = app;