const User = require("../models/User");
const jwt = require("jsonwebtoken");
const config = require("../config/config");
const signin = async(req,res)=>{
  const {
    nombre,
    apellido,
    rol,
    uuid,
    password
  } = req.body;

  let newUser = new User();

  newUser.firstName = nombre;
  newUser.lastName = apellido;
  newUser.role = rol;
  newUser.UUID = uuid;
  newUser.password = password;

  try {
    let userSaved = await newUser.save();
    let token = jwt.sign({_id:userSaved._id},config.secretKey)
    res.status(201).send({user:userSaved,token});
  } catch (error) {
    if(error.errors.UUID && error.errors.UUID.name === "ValidatorError"){
      res.status(403).send({error:error.message}); 
    }else{
      res.status(500).send({error:error.message}); 
    }
  }

}

module.exports = {
  signin
}