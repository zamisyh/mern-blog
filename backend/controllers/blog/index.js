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
                message: "Invalid id!"
            })
        });
   } catch (error) {
       console.log(error);
   } 
}


module.exports = { getArticle };