'use strict'

const VaccineInventory = require("../models/VaccineInventory");

const createVaccineInventory = async(req,res) => {

  const {
    idVacuna,
    expiracion,
    lote,
    creacion,
    idLocacion,
    cantidad,
    estado
  } = req.body;

  let newVaccineInventory = new VaccineInventory();

  newVaccineInventory.idVaccine = idVacuna;
  newVaccineInventory.ExpirationDate = expiracion;
  newVaccineInventory.LOT = lote;
  newVaccineInventory.createdAt = creacion;
  newVaccineInventory.locationId = idLocacion;
  newVaccineInventory.items = cantidad;
  newVaccineInventory.status = estado;

  try {
    let vaccineInventorySaved = await newVaccineInventory.save();
    res.status(201).send({vaccineInventory:vaccineInventorySaved});
  } catch (error) {
    res.status(500).send({error:error.message});
  }
}

const getAllVaccinesInventory = async(req,res) => {
  try {
    let vaccineInventoryList = await VaccineInventory.find();
    send.status(200).send({vaccineInventoryList}); 
  } catch (error) {
    res.status(500).send({error:error.message});
  }
}

const getVaccinesInventoryById = async(req,res) => {
  try {
    let {idVaccineInventory} = req.params;
    let vaccineInventoryById = await VaccineInventory.findById(idVaccineInventory);
    res.status(200).send({vaccineInventoryById});
  } catch (error) {
    res.status(500).send({error:error.message});
  }
}

module.exports = {
  createVaccineInventory,
  getAllVaccinesInventory,
  getVaccinesInventoryById
}