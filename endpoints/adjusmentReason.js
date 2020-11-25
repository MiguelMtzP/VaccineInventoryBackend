const express = require("express")
const app = express.Router()
const adjustmentController = require("../controllers/adjusmentReason");
const Authenticator = require('../middlewares/Authenticator');

app.get("/",adjustmentController.getAdjustments);

app.post("/",Authenticator.authenticate("jwt",{session:false}),adjustmentController.createAdjustmentReason);


module.exports = app
