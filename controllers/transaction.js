'use strict'

const Transaction = require("../models/Transaction");
const VaccineInventory = require("../models/VaccineInventory");

const createTransaction = async(req,res) => {

  const {
    idAdjustmentReason,
    adjustmentNote,
    idVaccineInventory,
    idPatient,
    typeAdjustment,
    amountAdjustment
  } = req.body;


  let newTransaction = new Transaction();
  newTransaction.idAdjustmentReason = idAdjustmentReason;
  newTransaction.adjustmentNote = adjustmentNote;
  newTransaction.idUser = req.user._id;
  newTransaction.idVaccineInventory = idVaccineInventory;
  newTransaction.idPatient = idPatient;
  try {
    let inventory = await VaccineInventory.findById(idVaccineInventory)
    let newBalance = inventory.items + (amountAdjustment* (typeAdjustment === "decrease"? -1:1))
    if (typeAdjustment === "decrease") {
      newTransaction.decAmount = amountAdjustment;
    }else{
      newTransaction.incAmount = amountAdjustment;
    }
    newTransaction.currentBalance = newBalance
  
    let transactionSaved = await newTransaction.save();
    await VaccineInventory.findByIdAndUpdate(idVaccineInventory,{$set:{items:newBalance}})
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
const getTransactionByInventory = async(req,res) => {

  try {
    let {idInventory} = req.params
    let transactionList = await Transaction.find({idVaccineInventory:idInventory})
                                .populate("idAdjustmentReason")
                                .populate("idUser")
                                .populate("idPatient")

    res.status(200).send({transactionList});
  } catch (error) {
    res.status(500).send({error:error.message});
  }
}

module.exports = {
  createTransaction,
  getTransaction,
  getTransactionByInventory
}
