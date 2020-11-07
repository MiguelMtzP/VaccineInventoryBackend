const mongoose = require("mongoose")
const Schema = mongoose.Schema

const uniqueValidator = require('mongoose-unique-validator');
const TransactionSchema = Schema({

    createdAt: {
        type: Date,
        trim : true,
        default: Date.now
    },
    idAdjustmentReason: {
        type: Schema.Types.ObjectId
    },
    adjustmentNote: {
        type: String
    },
    idUser: {
        type: Schema.Types.ObjectId
    },
    idVaccineInventory: {
        type: Schema.Types.ObjectId
    },
    idPatient: {
        type: Schema.Types.ObjectId
    },
    incAmount: {
        type: Number
    },
    decAmount: {
        type: Number
    },
    currentBalance: {
        type: Number
    }
});

TransactionSchema.plugin(uniqueValidator, { message: 'must be unique' });
module.exports = mongoose.model("Transaction",TransactionSchema)