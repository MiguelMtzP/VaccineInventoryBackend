'use strict'

const Vaccine = require("../models/Vaccine");

const createVaccine = async(req,res) => {

  const {
    name,
    cvxCode,
    mvxCode,
    idBrand,
    ndc,
    idFunding
  } = req.body;

  let newVaccine = new Vaccine();

  newVaccine.name = name;
  newVaccine.CVXCode = cvxCode;
  newVaccine.MVXCode = mvxCode;
  newVaccine.idBrand = idBrand;
  newVaccine.NDC = ndc;
  newVaccine.idFunding = idFunding;

  try {
    let vaccineSaved = await newVaccine.save();
    res.status(201).send({vaccine: vaccineSaved});
  } catch (error) {
    res.status(500).send({error:error.message});
  }
}

const getAllVaccines = async(req,res) => {
  try {
    let vaccineList = await Vaccine.find()
                      .populate("idBrand")
                      .populate("idFunding")
    res.status(200).send({vaccineList}); 
  } catch (error) {
    res.status(500).send({error:error.message});
  }
}

const getVaccinesById = async(req,res) => {
  try {
    let {idVaccine} = req.params;
    let vaccineById = await Vaccine.findById(idVaccine);
    res.status(200).send({vaccineById});
  } catch (error) {
    res.status(500).send({error:error.message});
  }
}

const deleteVaccineById = async (req,res)=>{
  try {
    let {idVaccine} = req.params

    let deleted =await Vaccine.findByIdAndRemove(idVaccine)
    res.status(204).send();
  } catch (error) {
    res.status(500).send({error:error.message});
  }
}

module.exports = {
  createVaccine,
  getAllVaccines,
  getVaccinesById,
  deleteVaccineById
}