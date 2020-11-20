const express = require("express");
const app = express.Router();

const locationController = require("../controllers/location");
const Authenticator = require("../middlewares/Authenticator");
app.get("/",locationController.getLocation);

app.post("/",Authenticator.authenticate("jwt",{session:false}),locationController.createLocations);

module.exports = app;