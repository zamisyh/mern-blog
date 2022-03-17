// const conn = require('../../config/connection');
const env = require('../../config/environment/index');
const articles = require('../../models/articles');


const getArticle = async (req, res) => {
   try {
        await articles.find()
            .then((result) => {
                res.status(200).json(result)
            }).catch((err) => {
                res.status(422).json({
                    status: 422,
                    message: "Something wrong"
                })
            });
    } catch (error) {
        console.log(error);
    } 
}

const getArticleByName = async (req, res) => {
    try {
        await articles.findOne({name: req.params.name})
            .then((result) => {
                res.status(200).json(result)
            }).catch((err) => {
                res.status(404).json({
                    status: 404,
                    message: "Invalid params name"
                })
            })
    } catch (error) {
        console.log(error);
    }
}


module.exports = { getArticle, getArticleByName };