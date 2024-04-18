// trainerProfileModel.js

const mongoose = require('mongoose');

const trainerProfileSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  headline: { type: String, required: true },
  biography: { type: String, required: true },
  language: { type: String, required: true },
  website: { type: String },
  twitter: { type: String },
  github: { type: String },
  linkedin: { type: String },
  youtube: { type: String },
});

const TrainerProfile = mongoose.model('TrainerProfile', trainerProfileSchema);

module.exports = TrainerProfile;
