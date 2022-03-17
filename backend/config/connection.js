const mongoose = require('mongoose');
const env = require('./environment/index');

const connect = async () => {
    await mongoose.connect(env.MONGO_URL+"/"+env.MONGO_DB, {
        useUnifiedTopology: true, 
        useNewUrlParser: true
    }).then(() => {
        console.log('Connected to database');
    }).catch((err) => {
        console.log('Error : ' + err)
    });
}

module.exports = connect;