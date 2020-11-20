const express = require('express')
const app = express.Router()
const userController = require("../controllers/users");
const Authenticator = require('../middlewares/Authenticator');
app.get("/",userController.getAllUsers)
app.get("/:idUser",userController.getUsersById)

module.exports = app