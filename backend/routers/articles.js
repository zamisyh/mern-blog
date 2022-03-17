const express = require('express');
const app = express.Router();

const { getArticle } = require('../controllers/blog/index');
app.get('/articles', getArticle);

module.exports = app;