// const conn = require('../../config/connection');
const env = require('../../config/environment/index');
const { sluggable } = require('../../helpers');
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

const otherArticle = async (req, res) => {
    await articles.find().sort({'_id': -1}).limit(2)
    .then((result) => {
        res.status(200).json(result)
    }).catch((err) => {
        res.status(404).json({
            status: 404,
            message: "Invalid params name"
        })
    })
}

const addArticle = async (req, res) => {
    try {
        await new articles({
            name: sluggable(req.body.name),
            title: req.body.title,
            thumbnail: req.body.thumbnail,
            content: req.body.content
        }).save((err, data) => {
            (err) ? res.status(400).json(err) : res.status(200).json({
                status: 200,
                message: "Succesfully create article",
                data: data
            })
        });
    } catch (error) {
        console.log(error);
    }
}


const updateArticle = async (req, res) => {
    try {
        await articles.findOneAndUpdate({ name: req.params.name }, {
            name: req.body.name,
            title: req.body.title,
            thumbnail: req.body.thumbnail,
            content: req.body.content
        }).then((result) => {
            res.status(200).json({
                status: 200,
                message: "Succesfully update article",
            })
        }).catch((err) => {
            res.status(401).json({
                status: 401,
                message: "Failed update data!"
            })
        })
    } catch (error) {
        console.log(error)
    }
}

const deleteArticle = async (req, res) => {
    try {
        await articles.findByIdAndDelete({_id: req.body.id})
            .then((response) => {
                res.send({message: "Succesfully delete articles"})
            }).catch((err) => {
                res.send({message: "Failed to delete", err})
            })
    } catch (error) {
        console.log(error);
    }
}


module.exports = { getArticle, getArticleByName, addArticle, updateArticle, otherArticle , deleteArticle};