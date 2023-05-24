const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    dev_url: process.env.DEV_URL,
    local_port: process.env.LOCAL_PORT,
    connectionString: process.env.CONNECTION_STRING,
    dev_port: process.env.DEV_PORT,
}