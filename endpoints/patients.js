const express = require('express')
const app = express.Router()
const patientController = require("../controllers/patients")
const Authenticator = require('../middlewares/Authenticator');

app.get("/",patientController.getAllPatients)
app.get("/:idPatient",patientController.getPatiensById)

app.post("/",Authenticator.authenticate("jwt",{session:false}),patientController.createPatient)

module.exports = app