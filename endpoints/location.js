const express = require("express");
const app = express.Router();

const locationController = require("../controllers/location");

app.get("/",locationController.getLocation);

app.post("/",locationController.createLocations);

module.exports = app;