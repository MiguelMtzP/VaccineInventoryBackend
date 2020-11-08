const express = require('express')
const app = express.Router()
const patientController = require("../controllers/patients")

app.get("/",patientController.getAllPatients)
app.get("/:idPatient",patientController.getPatiensById)

app.post("/",patientController.createPatient)

module.exports = app