// models/Event.js
const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  eventName: { type: String, required: true },
  description: { type: String, required: true },
  // Add other fields as needed
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
