const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  
  livesin: {
    type: String,
    trim: true,
  },
  worksAt: {
    type: String,
    trim: true,
  },

  profilePicture: String,
  coverPicture: String,
  about: String,
  relationship: String,
  followers: [],
  following: [],

  is_admin: {
    type: Boolean,
    default: false,
    required: true,
  },
  is_verified: {
    type: Boolean,
    default: false,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  deletedAt: { type: Date },



  // Trainer-specific fields
  trainerCnic:{
    type: String,
    trim: true,
  },

  trainerEmail: {
    type: String,
    trim: true,

  },
  trainerPassword: {
    type: String,
    trim: true,
  },
  firstName: { 
    type: String,
  },

  lastName: { 
    type: String,
  },
  
  headline: { 
    type: String ,
  },

  biography: { 
    type: String ,
  },

  language: { type: String },
  website: { type: String },
  twitter: { type: String },
  github: { type: String },
  linkedin: { type: String },
  youtube: { type: String },

  trainerPicture:{
    type: String
  }

});

// Create a model based on the schema
const User = mongoose.model('users', usersSchema);
module.exports = User;
