/**
 * File Name: user.service.js
 * 
 * Description: Manages operation and manipulation for users data
 * Author: Eynosoft Team
 */

const config = require('../config/index');
const msg = require('../helpers/messages.json');

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || config.connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;



const { Notification, Competition, User } = require('../helpers/db');

module.exports = {
    joinCompetion,
    getUserData,
    getUserProfileData,
    competationData,
}
/************************************************************************************/
/************************************************************************************/

/**
 * Save the data for competition
 * 
 * @param {*} param
 * @returns null 
 */
async function joinCompetion(req) {
    try {
        const param = req.body;

        let input = {
            sender: param.userId,
            message: param.username,
        };
        const Item = new Notification(input);

        const data = await Item.save();
        if (data) {
            console.log(data);
            return true;
        } else {
            return false;
        }
    } catch (err) {
        console.log('Error', err);
        return false;
    }
}

/************************************************************************************/
/************************************************************************************/
/**
 * Get user profile data
 * 
 * @param {*} param
 * @returns JSON|null 
 */
async function getUserProfileData() {
    try {
        var param = req.body;

        if (data) {
            console.log(data._id);
            return data._id;
        } else {
            return false;
        }
    } catch (err) {
        console.log('Error', err);
        return false;
    }
}
/**
 * Get user data
 * 
 * @param {*} param
 * @returns JSON|null 
 */
async function getUserData(param) {
    try {
        var param = req.body;

        if (data) {
            console.log(data._id);
            return data._id;
        } else {
            return false;
        }
    } catch (err) {
        console.log('Error', err);
        return false;
    }
}
/************************************************************************************/
/************************************************************************************/


/**
 *  Competation data save
 * 
 * @param {*} param
 * @returns JSON|null 
 */
async function competationData(req, res) {
    console.log("competation DATA")
    try {
        const param = req.body;
        console.log(param)

        let input = {
            opponentOne: {
                media_Url: param.url
            },
        };
        console.log(input)
        const Item = new Competition(input);

        const data = await Item.save();
        if (data) {
            console.log(data);
            return true;
        } else {
            return false;
        }

        /***********  TRY ANOTHER METHOD   **********/

        // const { userId, username, media_Url } = req.body;

        // const Item = await new Competition({
        //     userId,
        //     username,
        //     media_Url,
        // }).save();
        // res.status(201).send({
        //     success: true,
        //     message: "Add Successfully",
        //     Item,
        // });


        /**********SAME ERROR */
        /******************************** */


    } catch (err) {
        console.log('Error', err);
        return false;
    }
}