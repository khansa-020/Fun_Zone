const mongoose = require('mongoose');
//const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        trim: true
    },
     email:{
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    is_admin: {
        type: Boolean,
        default: false,
        required: true
    },
    is_verified: {
        type: Boolean,
        default: false
    },
        tokens: [
            {
                token: {
                    type: String,
                    required: true
                }
            }
        ],
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    deletedAt: { type: Date },
});

// Create a model based on the schema
module.exports  = mongoose.model('signup', userSchema);