const express = require("express");
const app = express.Router();

const VaccineController = require("../controllers/vaccine");

app.get("/",VaccineController.getAllVaccines);
app.get("/:idVaccine",VaccineController.getVaccinesById);

app.post("/",VaccineController.createVaccine);

module.exports = app;