/**
 * File Name: db.js
 * 
 * Description: Manages and exports models
 * Author: Eynosoft Team
 */



module.exports = {
    Competition: require('../models/competition.model'),
    User: require('../models/user.model'),
    Notification: require('../models/notification.model'),

};


const mongoose = require('mongoose')

const { connectionString } = require("../config/index");
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then((data) => {
        console.log(`Mongodb connected with server: ${data.connection.host}`);
    });