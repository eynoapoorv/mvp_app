/**
 * File Name: user.service.js
 * 
 * Description: Manages operation and manipulation for users data
 * Author: Eynosoft Team
 */

const config = require('../config/index');
const msg = require('../helpers/messages.json');
const competitionModel = require("../models/competitionModel")


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
async function joinCompetion(param) {
}

/************************************************************************************/
/************************************************************************************/
/**
 * Get user profile data
 * 
 * @param {*} param
 * @returns JSON|null 
 */
async function getUserProfileData(param) {
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
async function competationData(req) {
    try {
        const param = req.body;

        let input = {
            opponentOne: {
                userId: param.userId,
                username: param.username,
                media_url: param.media_url
            }
        }
        const Item = new competitionModel(input);

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