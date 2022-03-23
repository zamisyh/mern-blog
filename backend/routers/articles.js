const express = require('express');
const app = express.Router();

const { getArticle, getArticleByName, addArticle, updateArticle, otherArticle} = require('../controllers/blog/index');
const { addArticleList } = require('../validation/index');

app.get('/articles', getArticle);
app.get('/articles/:name', getArticleByName);
app.post('/articles/add-article', addArticleList, addArticle);
app.put('/articles/:name/update', updateArticle);
app.get('/other-articles', otherArticle)

module.exports = app;