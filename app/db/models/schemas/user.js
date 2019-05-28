const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const Blog = require('./blog')

module.exports = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    blog: [Blog],
    modified: { type: Date, default: Date.now }
});