/**
 * File Name: notification.model.js
 * 
 * Description: Manages notification data
 * Author: Eynosoft Team
 */

var mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const Schema = mongoose.Schema;
const schema = new Schema({
    sender: { type: Schema.Types.ObjectId, ref: 'User', required: false, default: null },
    receiver: { type: Schema.Types.ObjectId, ref: 'User', required: false, default: null },
    message: { type: String, required: false, default: null },
    inviteConfirmed: { type: Boolean, required: false, default: false }
},{
    timestamps: true
});

schema.set('toJSON', { virtuals: true, versionKey: false});

schema.plugin(mongoosePaginate);

module.exports = mongoose.model('Notification', schema);