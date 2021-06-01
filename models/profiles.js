let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let profileSchema = new Schema({
    id: String,
    userName: String,
    email: String
});

let Profile = mongoose.model('Profile', profileSchema, 'profiles');

module.exports = { Profile };
