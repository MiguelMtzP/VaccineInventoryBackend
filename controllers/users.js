'use strict'
const User = require("../models/User")

const createUser = async(req,res) => {

  const {
    nombre,
    apellido,
    rol,
    uuid,
    password
  } = req.body

  let newUser = new User()

  newUser.firstName = nombre
  newUser.lastName = apellido
  newUser.role = rol
  newUser.UUID = uuid
  newUser.password = password

  try {
    let userSaved = await newUser.save()
    res.status(201).send({user:userSaved})
  } catch (error) {
    if(error.errors.UUID && error.errors.UUID.name === "ValidatorError"){
      res.status(403).send({error:error.message}) 
    }else{
      res.status(500).send({error:error.message}) 
    }
  }
}

const getAllUsers = async (req,res) => {

  try {
    let listUsers = await User.find()
    res.status(200).send({listUsers})
  } catch (error) {
    res.status(500).send({error:error.message}) 
    
  }
}

module.exports = {
  createUser,
  getAllUsers
}