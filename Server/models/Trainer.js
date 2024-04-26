const mongoose = require('mongoose');

const trainerProfileSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Users",
  },
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
  trainerPicture:{ type: String },
  status: { type: String, default: "pending"},
  timings: {type: Object  }
});

const TrainerProfile = mongoose.model('TrainerProfile', trainerProfileSchema);

module.exports = TrainerProfile;
