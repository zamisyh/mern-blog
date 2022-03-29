const express = require('express')
const cors = require('cors');
const http = require('http');
const link = require('./config/environment/index');
const connect = require('./config/connection');
const path = require('path')


//routes
//model article
const getArticle = require('./routers/articles');
const getArticleByName = require('./routers/articles');
const addArticle = require('./routers/articles');
const updateArticle = require('./routers/articles');
const otherArticle = require('./routers/articles');
const deleteArticle = require('./routers/articles')
const uploadSingle = require('./routers/articles')

//model user
const userRegister = require('./routers/user');
const userFindAll = require('./routers/user');
const userFindById = require('./routers/user');
const userGetMe = require('./routers/user');



connect();

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname)))


app.use('/api', getArticle, getArticleByName, addArticle, updateArticle, otherArticle, deleteArticle, uploadSingle);
app.use('/api', userRegister, userFindAll, userFindById, userGetMe);





app.all("*", (req, res) => {
    res.send({
        message: "The router or endpoint you entered was not found"
    });
});

const server = http.createServer(app);
server.listen(link.PORT, () => {
    console.log(`Server listening on port ${link.PORT}`);
});
