const mongoose = require('mongoose');

const TrainerRequestSchema = new mongoose.Schema({
  personal: {
    name: String,
    age: String,
    gender: String,
    cnic: String,
    address: String,
    email: String,
  },
  education: {
    degreeLevel: String,
    session: String,
    cgpaPercentage: String,
    institute: String,
  },
  other: {
    course: String,
    newThing: String,
    fieldOfInterest: String,
  },
});

const TrainerRequest = mongoose.model('TrainerRequest', TrainerRequestSchema);

module.exports = TrainerRequest;
