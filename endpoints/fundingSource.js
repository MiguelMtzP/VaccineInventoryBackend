const express = require("express");
const app = express.Router();

const fundingSourceController = require("../controllers/fundingSource");

app.get("/",fundingSourceController.getFundingSource);

app.post("/",fundingSourceController.createFundingSource);

module.exports = app;