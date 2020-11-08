const express = require('express')
const app = express.Router()
const userController = require("../controllers/users");

app.get("/",userController.getAllUsers)
app.get("/:idUser",userController.getUsersById)

app.post("/",userController.createUser)

module.exports = app