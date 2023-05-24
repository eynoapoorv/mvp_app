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


