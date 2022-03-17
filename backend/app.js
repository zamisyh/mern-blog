const express = require('express')
const cors = require('cors');
const http = require('http');
const link = require('./config/environment/index');
const connect = require('./config/connection');
//routes
const getArticle = require('./routers/articles');
const getArticleByName = require('./routers/articles');


connect();

const app = express();
app.use(express.json());
app.use(cors());


app.use('/api', getArticle, getArticleByName);



app.all("*", (req, res) => {
    res.send({
        message: "The router or endpoint you entered was not found"
    });
});

const server = http.createServer(app);
server.listen(link.PORT, () => {
    console.log(`Server listening on port ${link.PORT}`);
});
