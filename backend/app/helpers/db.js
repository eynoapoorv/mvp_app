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
const connectionString = require("../config/index")

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(connectionString)
        console.log(`Connect To Mongoose Database ${conn.connection.host}`)
    } catch (error) {
        console.log(`Error in databse connection ${error}`)
    }

}