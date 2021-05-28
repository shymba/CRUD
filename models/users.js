let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema({
    id: Number,
    name: String,
    gender: String,
    birthday: String,
    city: String,
    imageURL: String
});

let User = mongoose.model('User', userSchema);

module.exports = { User };