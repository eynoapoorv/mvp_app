/**
 * File Name: user.model.js
 * 
 * Description: Manages user data
 * Author: Eynosoft Team
 */

var mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const Schema = mongoose.Schema;
const schema = new Schema({
    name: { type: String, required: false, default: '' },
    email: { type: String, required: false, unique: true, index: true, default: '' },
    isActive: { type: Boolean, required: false, default: true },
}, {
    timeStamps: true
});

schema.set('toJSON', { virtuals: true, versionKey: false });

schema.plugin(mongoosePaginate);

module.exports = mongoose.model('User', schema);