const bodyParser = require('body-parser');
const express = require('express')
const app = express()
const userRoutes = require("./endpoints/users")

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

app.use("/user",userRoutes);

module.exports= app; 