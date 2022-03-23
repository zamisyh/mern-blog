const jwt = require('jsonwebtoken');
const env = require('../../config/environment/index')

const generateToken = (id) => {
    return jwt.sign({id}, env.JWT_SECRET, {
        expiresIn: '3d',
    })
}

module.exports = { generateToken }