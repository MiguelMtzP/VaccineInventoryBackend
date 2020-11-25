const express = require('express')
const app = express.Router()
const Authenticator = require('../middlewares/Authenticator');
const transactionController = require("../controllers/transaction");

app.get("/",transactionController.getTransaction);

app.get("/byInventory/:idInventory",transactionController.getTransactionByInventory);

app.post("/",Authenticator.authenticate("jwt",{session:false}),transactionController.createTransaction);

module.exports = app;