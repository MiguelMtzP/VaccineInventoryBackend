const mongoose = require("mongoose")
const Schema = mongoose.Schema

const uniqueValidator = require('mongoose-unique-validator');
const Brand = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    name: {
        type: String,
        trim:true
    }
});
Brand.plugin(uniqueValidator, { message: 'must be unique' });

module.exports = mongoose.model("Brand",Brand)