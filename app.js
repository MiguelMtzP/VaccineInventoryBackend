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
const accessRoutes = require("./endpoints/access")
const signinRoutes = require("./endpoints/signin")

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use((req,res,next)=>{
  res.header('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Allow-Headers','X-API-KEY,Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method, Authorization');
  res.header('Access-Control-Allow-Methods','GET, POST, PUT, DELETE');
  res.header('Allow','GET, POST, PUT, DELETE')
  next();
});

app.use("/adjustment",adjustmentRoutes);
app.use("/brand",brandRoutes);
app.use("/fundingSource",fundingSourceRoutes);
app.use("/location",locationRoutes);
app.use("/patient",patientRoutes);
app.use("/transaction",transactionRoutes);
app.use("/user",userRoutes);
app.use("/vaccine",vaccineRoutes);
app.use("/vaccineInventory",vaccineInventoryRoutes);
app.use("/access",accessRoutes);
app.use("/signin",signinRoutes);

module.exports= app;