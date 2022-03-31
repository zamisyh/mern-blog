const express = require('express');
const app = express.Router();

const { getArticle, getArticleByName, addArticle, updateArticle, otherArticle, deleteArticle, getArticleById} = require('../controllers/blog/index');
const { protect } = require('../middleware/authMiddleware');
const { addArticleList } = require('../validation/index');
const { upload } = require('../middleware/multerMiddleware');
const { uploadSingle } = require('../helpers');

app.get('/articles', getArticle);
app.get('/articles/:name', getArticleByName);
app.post('/articles/add-article', protect, addArticleList, addArticle);
app.put('/articles/:id/update', updateArticle);
app.get('/other-articles', otherArticle)
app.post('/articles/delete', protect, deleteArticle)
app.get('/articles/id/:id', getArticleById)
app.post('/articles/uploads', upload.single('image'), (req, res) => {
    if (req.file) {
        res.json(req.file)
    }else{
        throw 'error'
    }
})
module.exports = app;