const express = require("express");
const app = express.Router();

const vaccineInventorController = require("../controllers/vaccineInventory");
const Authenticator = require('../middlewares/Authenticator');

app.get("/",vaccineInventorController.getAllVaccinesInventory);
app.get("/:idVaccineInventory",vaccineInventorController.getVaccinesInventoryById);

app.post("/",Authenticator.authenticate("jwt",{session:false}),vaccineInventorController.createVaccineInventory);

module.exports = app;