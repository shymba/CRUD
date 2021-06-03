let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let sigInUserSchema = new Schema({
    email: String,
    password: String
});

let SigInUser = mongoose.model('SigInUser', sigInUserSchema, 'signinuser');

module.exports = { SigInUser };
