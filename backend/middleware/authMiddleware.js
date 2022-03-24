const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/user')
const decoded = require('./jwt/decodedToken')

const protect = asyncHandler(async (req, res, next) => {
    let token;

    //Bearer token
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            //get token from header
            token = req.headers.authorization.split(' ')[1]

            //verify token 
            const decode = decoded(token)

            //get user from the token
            req.user = await User.findById(decode.id).select('-password')
            
            next();
        } catch (error) {
            console.log(error);
            res.status(401).json({message: 'Not Authorized'})
        }
    }

    if (!token) {
        res.status(401).json({message: 'Not authorized, no token!'})
    }
});

module.exports =  { protect }