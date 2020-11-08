const express = require("express");
const app = express.Router();

const vaccineInventorController = require("../controllers/vaccineInventory");

app.get("/",vaccineInventorController.getAllVaccinesInventory);
app.get("/:idVaccineInventory",vaccineInventorController.getVaccinesInventoryById);

app.post("/",vaccineInventorController.createVaccineInventory);

module.exports = app;