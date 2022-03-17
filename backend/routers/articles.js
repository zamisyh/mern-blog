const express = require('express');
const app = express.Router();

const { getArticle, getArticleByName, addArticle } = require('../controllers/blog/index');

app.get('/articles', getArticle);
app.get('/articles/:name', getArticleByName);
app.post('/articles/add-article', addArticle);

module.exports = app;