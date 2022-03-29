const joi = require('joi');

const register = joi.object().keys({
    email: joi.string().required().email().exist(),
    name: joi.string().required().min(4),
    password: joi.string().required().min(4),
    confirm_password: joi.string().required().valid(joi.ref('password'))
});

const login = joi.object().keys({
    email: joi.string().required().email(),
    password: joi.string().required()
})

const addArticle = joi.object().keys({
    name: joi.string().required().lowercase(),
    title: joi.string().required().min(4),
    content: joi.string().required(),
    thumbnail: joi.string().required()
})

module.exports = { register, addArticle, login }