'use stric'

const AdjustmentReason = require("../models/AdjustmentReason")

const createAdjustmentReason = async(req,res) => {

  const {
    tipo,
    razon,
    descripcion
  } = req.body

  let newAdjustmentReason = new AdjustmentReason();

  newAdjustmentReason.type = tipo;
  newAdjustmentReason.reason = razon;
  newAdjustmentReason.description = descripcion;

  try {
    let adjustmentReasonSaved = await newAdjustmentReason.save();
    res.status(201).send({adjustmentReason:adjustmentReasonSaved});
  } catch (error) {
    res.status(500).send({error:error.message});
  }
}

const getAdjustments = async(req,res) => {
  try {
    let adjustmentList = await AdjustmentReason.find();
    res.status(200).send({adjustmentList});
  } catch (error) {
    res.status(500).send({error:error.message});
  }
}

module.exports = {
  createAdjustmentReason,
  getAdjustments
}
