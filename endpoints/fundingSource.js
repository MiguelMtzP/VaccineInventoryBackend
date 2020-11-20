const express = require("express");
const app = express.Router();

const fundingSourceController = require("../controllers/fundingSource");
const Authenticator = require("../middlewares/Authenticator");
app.get("/",fundingSourceController.getFundingSource);

app.post("/",Authenticator.authenticate("jwt",{session:false}),fundingSourceController.createFundingSource);

module.exports = app;