const jwt = require('jsonwebtoken');
const env = require('../../config/environment/index')

const decoded = (token) => {
    return jwt.verify(token, env.JWT_SECRET)
}

module.exports = {decoded}