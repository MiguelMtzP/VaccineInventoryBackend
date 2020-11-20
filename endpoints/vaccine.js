const express = require("express");
const app = express.Router();
const Authenticator = require("../middlewares/Authenticator");
const VaccineController = require("../controllers/vaccine");

app.get("/",VaccineController.getAllVaccines);
app.get("/:idVaccine",VaccineController.getVaccinesById);

app.post("/",Authenticator.authenticate("jwt",{session:false}),VaccineController.createVaccine);

module.exports = app;