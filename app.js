const bodyParser = require('body-parser');
const express = require('express');
const app = express();

const adjustmentRoutes = require("./endpoints/adjusmentReason");
const brandRoutes = require("./endpoints/brand");
const fundingSourceRoutes = require("./endpoints/fundingSource");
const locationRoutes = require("./endpoints/location");
const patientRoutes = require("./endpoints/patients");
const transactionRoutes = require("./endpoints/transaction");
const userRoutes = require("./endpoints/users");
const vaccineRoutes = require("./endpoints/vaccine");
const vaccineInventoryRoutes = require("./endpoints/vaccineInventory");

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use("/adjustment",adjustmentRoutes);
app.use("/brand",brandRoutes);
app.use("/fundingSource",fundingSourceRoutes);
app.use("/location",locationRoutes);
app.use("/patient",patientRoutes);
app.use("/transaction",transactionRoutes);
app.use("/user",userRoutes);
app.use("/vaccine",vaccineRoutes);
app.use("/vaccineInventory",vaccineInventoryRoutes);

module.exports= app;