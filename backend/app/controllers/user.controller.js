/**
 * File Name: user.controller.js
 * 
 * Description: Manages operation and manipulation for users data
 * Author: Eynosoft Team
 */
const config = require('../config/index');
const express = require('express');
const router = express.Router();
const msg = require('../helpers/messages.json');
const userService = require('../services/user.service');

router.post('/join', joinCompetition);
router.get('/userprofiledata', getUserProfileData);
router.post('/userdata', getUserData);
router.get('/pdata', getpData);

module.exports = router;
/**
 * Function to send notification for competion
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns JSON|null
 */
function joinCompetition(req, res, next) {
    userService.joinCompetion(req)
        .then(notification => notification ? (notification && notification.isActive == true ? res.json({ status: true, message: msg.user.login.success, data: notification }) : res.status(400).json({ status: false, message: msg.user.login.active })) : res.status(400).json({ status: false, message: msg.user.login.error }))
        .catch(err => next(err));
}

/************************************************************************************/
/************************************************************************************/
/**
 * Function to get the user profile data
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns JSON|null
 */
function getUserProfileData(req, res, next) {
    userService.getUserData(req)
        .then(user => user ? res.status(200).json({ status: true, data: user }) : res.status(400).json({ status: false, message: msg.common.no_data_err, data: [] }))
        .catch(err => next(res.json({ status: false, message: err })));      
} 
/************************************************************************************/
/************************************************************************************/
/**
 * Function to get the user data
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns JSON|null
 */
function getUserData(req, res, next) {
        userService.getUserData(req)
        .then(user => user ? res.status(200).json({ status: true, data: user }) : res.status(400).json({ status: false, message: msg.common.no_data_err, data: [] }))
        .catch(err => next(res.json({ status: false, message: err })));    
}
/************************************************************************************/
/************************************************************************************/