const mongoose = require("mongoose")
const Schema = mongoose.Schema
const uniqueValidator = require('mongoose-unique-validator');

const  Patient = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    birthDay: {
        type: Date
    },
    gender: {
        type: String
    },
    PCC: {
        type: Number
    }
});
Patient.plugin(uniqueValidator, { message: 'must be unique' });
module.exports = mongoose.model("Patient",Patient)