/**
 * File Name: server.js
 * 
 * Description: Manages all the data related operations,api calls etc
 * Author: Eynosoft Team
 */

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./app/config/index');
const https = require('https');
const app = express();
const errorHandler = require('./app/helpers/error-handler');

var corsOptions = {
    origin: '*',
    credentials: true
}
app.get("/", (req, res) => {
  res.json({message: "Welcome"})      
});
app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));



app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
app.use('/user', require('./app/controllers/user.controller'));
app.use(errorHandler);
// set port, listen for requests
const PORT = config.dev_port || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});