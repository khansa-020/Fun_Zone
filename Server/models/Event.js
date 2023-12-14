const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  eventName: {
     type: String, 
     required: true 
    },

  description: { 
    type: String, 
    required: true 
  },

  hostedBy: { 
    type: String, 
    required: true 
  },

  price: { 
    type: Number, 
    required: true 
  },

  category: { 
    type: String, 
    required: true 
  },

  posterImage: { 
    type: Buffer 
  }, // Store image data as Buffer
  
  date: { 
    type: Date, 
    required: true 
  },

  time: { 
    type: String, 
    required: true 
  },

  venue: { 
    type: String, 
    required: true 
  },

  maxAttendees: {
     type: Number, 
     default: 50 
    },
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
