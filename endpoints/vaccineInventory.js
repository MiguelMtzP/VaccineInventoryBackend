const express = require("express");
const app = express.Router();

const vaccineInventorController = require("../controllers/vaccineInventory");
const Authenticator = require('../middlewares/Authenticator');

app.get("/",vaccineInventorController.getAllVaccinesInventory);
app.get("/byVaccine/:idVaccine",vaccineInventorController.getInventoryByVaccine);
app.get("/:idVaccineInventory",vaccineInventorController.getVaccinesInventoryById);
app.patch("/:idVaccineInventory",vaccineInventorController.patchVaccineInventory);

app.post("/",Authenticator.authenticate("jwt",{session:false}),vaccineInventorController.createVaccineInventory);

module.exports = app;