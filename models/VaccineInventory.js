const mongoose = require("mongoose")
const Schema = mongoose.Schema
const uniqueValidator = require('mongoose-unique-validator');

const VaccineInventory = new Schema({
    idVaccine: {
        type: Schema.Types.ObjectId
    },
    ExpirationDate: {
        type: Date
    },
    LOT: {
        type: String,
    },
    createdAt: {
        type: Date,
        default:Date.now
    },
    locationId: {
        type: Schema.Types.ObjectId,
        def:"Location"
    },
    items: {
        type: Number
    },
    status: {
        type: String
    }
});

VaccineInventory.plugin(uniqueValidator, { message: 'must be unique' });
module.exports = mongoose.model("VaccineInventory",VaccineInventory)
