'use strict'

const Brand = require("../models/Brand");

const createBrand = async(req,res) => {

  const {
    name
  } = req.body

  let newBrand = new Brand();

  newBrand.name = name;

  try {
    let brandSaved = await newBrand.save();
    res.status(201).send({brand: brandSaved});
  } catch (error) {
    res.status(500).send({error: error.message});
  }
}

const getBrands = async(req,res) => {
  try {
  let listBrands = await Brand.find();
  res.status(200).send({listBrands});
  } catch (error) {
    res.status(500).send({error: error.message});
  }
}

const deleteBrand = async(req,res) => {

  try {
    let brandDeleted = Brand.findOneAndDelete();
    res.sataus(200).send({brandDeleted});
  } catch (error) {
    res.status(500).send({error: error.message});
  }
}

module.exports = {
  createBrand,
  getBrands,
  deleteBrand
}