const express = require('express')
const app = express.Router()
const userController = require("../controllers/users");

app.get("/",userController.getAllUsers)

app.post("/",userController.createUser)

module.exports = app