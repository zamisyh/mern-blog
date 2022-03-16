const express = require('express')
const cors = require('cors');
const http = require('http');

const link = require('./config/environment/index');
const app = express();

app.use(express.json());
app.use(cors());



app.all("*", (req, res) => {
    res.send({
        message: "The router or endpoint you entered was not found"
    });
});

const server = http.createServer(app);
server.listen(link.PORT, () => {
    console.log(`Server listening on port ${link.PORT}`);
});