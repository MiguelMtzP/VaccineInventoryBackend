const express = require("express")
const app = express.Router()
const adjustmentController = require("../controllers/adjusmentReason");

app.get("/",adjustmentController.getAdjustments);

app.post("/",adjustmentController.createAdjustmentReason);


module.exports = app
