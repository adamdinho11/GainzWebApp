const mongoose = require('mongoose');
const sqlite3 = require('sqlite3');

const Schema = mongoose.Schema;

const usersSchema = new Schema({
    username: String,
    email: String,
    password: String,
    firstname: String,
    lastname: String,
    birthday: Date
});

module.exports = mongoose.model('user', usersSchema, 'users');
module.exports = sqlite3.model('user', usersSchema, 'users');