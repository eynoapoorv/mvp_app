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
    userService.socialLogin(req)
        .then(notification => notification ? (notification && notification.isActive == true ? res.json({ status: true, message: msg.user.login.success, data: notification }) : res.status(400).json({ status: false, message: msg.user.login.active })) : res.status(400).json({ status: false, message: msg.user.login.error }))
        .catch(err => next(err));
}

/************************************************************************************/
/************************************************************************************/


