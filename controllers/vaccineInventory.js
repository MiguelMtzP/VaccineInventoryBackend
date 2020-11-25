'use strict'

const VaccineInventory = require("../models/VaccineInventory");

const createVaccineInventory = async(req,res) => {

  const {
    idVacuna,
    expiracion,
    lote,
    idLocacion,
    cantidad,
    estado
  } = req.body;

  let newVaccineInventory = new VaccineInventory();

  newVaccineInventory.idVaccine = idVacuna;
  newVaccineInventory.ExpirationDate = expiracion;
  newVaccineInventory.LOT = lote;
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
    let vaccineInventoryList = await VaccineInventory.find()
                                .populate("idVaccine")
                                .populate("locationId")
                                .sort({createdAt:-1});
    res.status(200).send({vaccineInventoryList}); 
  } catch (error) {
    res.status(500).send({error:error.message});
  }
}

const getVaccinesInventoryById = async(req,res) => {
  try {
    let {idVaccineInventory} = req.params;
    let vaccineInventory = await VaccineInventory.findById(idVaccineInventory);
    res.status(200).send({vaccineInventory});
  } catch (error) {
    res.status(500).send({error:error.message});
  }
}

const getInventoryByVaccine = async(req,res)=>{
  try {
    let {idVaccine} = req.params
    let inventory = await VaccineInventory.find({idVaccine:idVaccine})
                                .populate("idVaccine")
                                .populate("locationId")
                                .sort({createdAt:-1});
    res.status(200).send({inventory}); 

  } catch (error) {
    res.status(500).send({error:error.message});
  }

}
const patchVaccineInventory = async(req,res)=>{
  try {
    const {
      idLocacion,
      LOT,
      status
    } = req.body
    let {idVaccineInventory} = req.params
    let inventory = await VaccineInventory.findByIdAndUpdate(idVaccineInventory,{$set:{idLocacion,LOT,status}},{new:true})
    res.status(200).send({inventory}); 

  } catch (error) {
    res.status(500).send({error:error.message});
  }

}
module.exports = {
  createVaccineInventory,
  getAllVaccinesInventory,
  getVaccinesInventoryById,
  getInventoryByVaccine,
  patchVaccineInventory
}