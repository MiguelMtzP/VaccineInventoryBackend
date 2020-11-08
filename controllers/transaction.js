'use strict'

const Transaction = require("../models/Transaction");

const createTransaction = async(req,res) => {

  const {
    fechaCreacion,
    idMotivoAjuste,
    notaAjuste,
    idUsuario,
    idInventarioVacuna,
    idPaciente,
    cantidadIncremento,
    cantidadDecremento,
    saldoActual
  } = req.body;

  let newTransaction = new Transaction();

  newTransaction.createdAt = fechaCreacion;
  newTransaction.idAdjustmentReason = idMotivoAjuste;
  newTransaction.adjustmentNote = notaAjuste;
  newTransaction.idUser = idUsuario;
  newTransaction.idVaccineInventory = idInventarioVacuna;
  newTransaction.idPatient = idPaciente;
  newTransaction.incAmount = cantidadIncremento;
  newTransaction.decAmount = cantidadDecremento;
  newTransaction.currentBalance = saldoActual;

  try {
    let transactionSaved = await newTransaction.save();
    res.status(201).send({transaction: transactionSaved});
  } catch (error) {
    res.status(500).send({error:error.message});
  }
}

const getTransaction = async(req,res) => {

  try {
    let transactionList = await Transaction.find();
    res.status(200).send({transactionList});
  } catch (error) {
    res.status(500).send({error:error.message});
  }
}

module.exports = {
  createTransaction,
  getTransaction
}
