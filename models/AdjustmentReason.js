const mongoose = require("mongoose")
const Schema = mongoose.Schema

const uniqueValidator = require('mongoose-unique-validator');

const AdjustmentReasonSchema = new Schema({

    type: {
        type: String
    },
    reason: {
        type: String,
        trim:true
    },
    description: {
        type: String,
        trim:true
    }
});

AdjustmentReasonSchema.plugin(uniqueValidator, { message: 'must be unique' })
module.exports = mongoose.model("AdjustmentReason",AdjustmentReasonSchema)