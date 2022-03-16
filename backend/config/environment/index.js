const env = require('dotenv').config(
    {
        path: process.cwd() +'/config/environment/.env'
    }
);
const link = process.env;
module.exports = link;