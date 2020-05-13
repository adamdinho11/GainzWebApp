const mongoose = require('mongoose');
const sqlite3 = require('sqlite3');

const Schema = mongoose.Schema;

const routineSchema = new Schema({
    username: String,
    muscle_group: String,
    description: String,
    reps: int,
    sets: int,
    image: Blob,
    video: Blob
});

module.exports = mongoose.model('routine', routneSchema, 'routines');
module.exports = sqlite3.model('routine', routineSchema, 'routines');