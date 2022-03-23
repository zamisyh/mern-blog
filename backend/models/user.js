const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const userModel = new Schema({
    name: { 
        type: String, 
        min:[4, "Min 6 characters"], 
        required:[true, "Name required"] 
    },
    email: {
        type: String,
        required: [true, "Email required"],
    },
    password: {
        type: String,
        required: [true, "Password required!"]
    },
    token: {
        type: String
    }

})

module.exports = mongoose.model('user', userModel);