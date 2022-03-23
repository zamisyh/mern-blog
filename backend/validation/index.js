const { addArticle, register } = require('./schema');

const registerList = (req, res, next) => {
    const { result, error } = register.validate(req.body);
    (error === undefined) ? next() : res.send({message: error}).status(304); 
}

const addArticleList = (req, res, next) => {
    const { result, error } = addArticle.validate(req.body);
    (error === undefined) ? next() : res.send({message: error}).status(304);
}

module.exports = { registerList, addArticleList }