const mongoose = require("mongoose")
const Schema = mongoose.Schema
const uniqueValidator = require('mongoose-unique-validator');
const FundingSource = new Schema({
    Name: {
        type: String
    }
});

FundingSource.plugin(uniqueValidator, { message: 'must be unique' });
module.exports = mongoose.model("FundingSource",FundingSource)
