const mongoose = require("mongoose")
const Schema = mongoose.Schema
const uniqueValidator = require('mongoose-unique-validator');

const  Location = new Schema({
    name: {
        type: String,
        trim:true
    },
    address: {
        type: String,
        trim:true
    },
});

Location.plugin(uniqueValidator, { message: 'must be unique' });
module.exports = mongoose.model("Location",Location)