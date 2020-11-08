'use strict'

const Patient = require("../models/Patient")

const createPatient = async(req,res) => {

  const {
    nombre,
    apellido,
    fechaNacimiento,
    genero,
    pcc
  } = req.body

  let newPatient = new Patient()

  newPatient.firstName = nombre
  newPatient.lastName = apellido
  newPatient.birthDay = fechaNacimiento
  newPatient.gender = genero
  newPatient.PCC = pcc
  
  try {
    let patientSaved = await newPatient.save()
    res.status(201).send({patient: patientSaved})
  } catch (error) {
    res.status(500).send({error:error.message})
  }
} 

const getAllPatients = async(req,res) => {
  try {
    let listPatients = await Patient.find()
    res.status(200).send({listPatients})
  } catch (error) {
    res.status(500).send({error:error.message})
  }
}

const getPatiensById = async(req,res) => {
  try {
    let {idPatient} = req.params
    let patientsById = await Patient.findById(idPatient)
    res.status(200).send({patientsById})
  } catch (error) {
    res.status(500).send({error:error.message})
  }
}

module.exports = {
  createPatient,
  getAllPatients,
  getPatiensById
}