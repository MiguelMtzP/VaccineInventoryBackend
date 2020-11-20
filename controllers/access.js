const User = require("../models/User")
const jwt = require('jsonwebtoken');
const config = require("../config/config");

const login = async (req,res)=>{
  try {
    let {user,password}  = req.body

    let userFound = await User.findOne({UUID:user,password})
    if (userFound) {
      // aqui hubo exito, devolver user, crear token 
      const token = jwt.sign({ _id: userFound._id},config.secretKey );
      res.status(200).send({userFound,token})
    } else {
      res.status(401).send({message:`there's not a user with this credentials`})
    }
  } catch (error) {
    res.status(500).send({error:error.message})
    
  }
}

module.exports = {
  login
}