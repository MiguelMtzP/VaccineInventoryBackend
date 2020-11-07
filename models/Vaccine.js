const mongoose = require("mongoose")
const Schema = mongoose.Schema
const uniqueValidator = require('mongoose-unique-validator');

const  Vaccine = new Schema({
    name: {
        type: String
    },
    CVXCode: {
        type: String
    },
    MVXCode: {
        type: String
    },
    idBrand: {
        type: Schema.Types.ObjectId
    },
    NDC: {
        type: Number
    },
    idFunding: {
        type: Schema.Types.ObjectId
    }
});
Vaccine.plugin(uniqueValidator, { message: 'must be unique' });
module.exports = mongoose.model("Vaccine",Vaccine)
