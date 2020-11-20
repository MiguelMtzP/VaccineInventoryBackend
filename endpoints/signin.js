const express = require("express")
const app = express.Router()
const siginController = require("../controllers/signin"); 

app.post("/",siginController.signin)

module.exports = app
