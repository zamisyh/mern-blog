const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const articleSchema = new Schema({
    name: { type: String, min: [6, 'Name to short!'], required: [true, 'Name is required!'] },
    title: { type: String, required: [true, 'Title is required!']},
    thumbnail:{ type: String, required: [true, 'Thumbnail is required!']},
    content: { type: String, required: [true, 'Content is required!']}
});


module.exports = mongoose.model('articles', articleSchema);
