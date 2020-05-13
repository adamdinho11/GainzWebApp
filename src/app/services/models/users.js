const mongoose = require('mongoose');
const sqlite3 = require('sqlite3');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    email: String,
    password: String,
    firstname: String,
    lastname: String,
    birthday: Date
});

module.exports = mongoose.model('user', userSchema, 'users');
module.exports = sqlite3.model('user', userSchema, 'users');