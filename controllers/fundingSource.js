'use strict'

const FundingSource = require("../models/FundingSource");

const createFundingSource = async(req,res) => {

  const {
    nombre
  } = req.body

  let newFundingSource = new FundingSource();

  newFundingSource.Name = nombre;

  try {
    let fundingSourceSaved = await newFundingSource.save();
    res.status(201).send({fundingSource:fundingSourceSaved});
  } catch (error) {
    res.status(500).send({error: error.message});
  }
}

const getFundingSource = async(req,res) => {
  try {
    let fundingSourceList = await FundingSource.find();
    res.status(201).send({fundingSourceList});
  } catch (error) {
    res.status(500).send({error:error.message});
  }
}

module.exports = {
  createFundingSource,
  getFundingSource
}