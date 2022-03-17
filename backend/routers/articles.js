const express = require('express');
const app = express.Router();

const { getArticle, getArticleByName } = require('../controllers/blog/index');

app.get('/articles', getArticle);
app.get('/articles/:name', getArticleByName);

module.exports = app;