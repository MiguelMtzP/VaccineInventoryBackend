'use strict'

const FundingSource = require("../models/FundingSource");

const createFundingSource = async(req,res) => {

  const {
    name
  } = req.body

  let newFundingSource = new FundingSource();

  newFundingSource.name = name;

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