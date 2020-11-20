const express = require("express")
const app = express.Router()
const accessController = require("../controllers/access"); 

app.post("/",accessController.login)

module.exports = app
