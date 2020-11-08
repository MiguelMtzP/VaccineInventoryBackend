'use strict'

const Location = require("../models/Location");

const createLocations = async(req,res) => {
   
  const {
    nombre,
    direccion
  } = req.body;

  let newLocation = new Location();

  newLocation.name = nombre;
  newLocation.address = direccion;
  
  try {
    let locationSaved = await newLocation.save();
    res.status(201).send({location: locationSaved});
  } catch (error) {
    res.status(500).send({error: error.message});
  }
}

const getLocation = async(req,res) => {
  try {
    let locationList = await Location.find();
    res.status(201).send({locationList});
  } catch (error) {
    res.status(500).send({error:error.message});
  }
}

module.exports = {
  createLocations,
  getLocation
}