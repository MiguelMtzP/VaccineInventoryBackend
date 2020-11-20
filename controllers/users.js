'use strict'
const User = require("../models/User")


const getAllUsers = async (req,res) => {

  try {
    let listUsers = await User.find();
    res.status(200).send({listUsers});
  } catch (error) {
    res.status(500).send({error:error.message});
  }
}

const getUsersById = async(req, res) => {

  try {
    let {idUser} = req.params;
    let UsersById = await User.findById(idUser);
    res.status(200).send({UsersById});
  } catch (error) {
    res.status(500).send({error:error.message}); 
  }
}

module.exports = {

  getAllUsers,
  getUsersById
}