const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const articleSchema = new Schema({
    name: String,
    title: String,
    thumbnail: String,
    content: String
});


module.exports = mongoose.model('articles', articleSchema);