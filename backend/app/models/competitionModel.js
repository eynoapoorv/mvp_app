/**
 * File Name: competition.model.js
 * 
 * Description: Manages competion data
 * Author: Eynosoft Team
 */

var mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const Schema = mongoose.Schema;
const schema = new Schema({
    opponentOne: {
        type: String,
        required: false,
        default: ''
    },
    opponentTwo: {
        type: String,
        required: false,
        default: ''
    },
    status: {
        type: String,
        required: false,
        default: ''
    },
    isActive: {
        type: Boolean,
        required: false,
        default: false
    }
}, {
    timestamps: true
});

schema.set('toJSON', { virtuals: true, versionKey: false });

schema.plugin(mongoosePaginate);

module.exports = mongoose.model('Competition', schema);