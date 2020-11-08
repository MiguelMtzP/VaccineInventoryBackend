const express = require('express')
const app = express.Router()

const transactionController = require("../controllers/transaction");

app.get("/",transactionController.getTransaction);

app.post("/",transactionController.createTransaction);

module.exports = app;