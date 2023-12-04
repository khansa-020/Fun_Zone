const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    email:String,
    password:String
});

// Create a model based on the schema
module.exports  = mongoose.model('signup', userSchema);
