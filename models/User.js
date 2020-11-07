const mongoose = require("mongoose")
const Schema = mongoose.Schema
const uniqueValidator = require('mongoose-unique-validator');


const  User = new Schema({

    fitstName: {
        type: String
    },
    lastName: {
        type: String
    },
    role: {
        type: String
    },
    UUID: {
        type: String,
		unique: true,
		required: true,
		trim: true,
    },
    password: {
        type: String
    }
});

User.plugin(uniqueValidator, { message: 'must be unique' });
module.exports = mongoose.model("User",User)
