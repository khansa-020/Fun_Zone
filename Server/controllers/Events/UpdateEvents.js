// controllers/eventController.js
const Event = require('../../models/Event');

const getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateEvent = async (req, res) => {
  const { eventId } = req.params;
  const { eventName, description } = req.body;

  try {
    const updatedEvent = await Event.findByIdAndUpdate(
      eventId,
      { eventName, description },
      { new: true }
    );

    res.json(updatedEvent);
  } catch (error) {
    console.error('Error updating event:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const addEvent = async (req, res) => {
  const { eventName, description } = req.body;

  try {
    const newEvent = new Event({ eventName, description });
    const savedEvent = await newEvent.save();

    res.status(201).json(savedEvent);
  } catch (error) {
    console.error('Error adding event:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { getEvents, updateEvent, addEvent };
