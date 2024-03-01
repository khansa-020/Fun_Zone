// controllers/eventController.js
const Event = require('../../models/Event');
// const multer = require('multer');
// const upload = multer();

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

  try {
    // Get file data from Multer
    const fileData = req.file;
  
  // Destructure fields from req.body
  const {
    eventName,
    description,
    hostedBy,
    price,
    category,
    posterImage =fileData ? fileData.buffer.toString('base64') : undefined,
    date,
    time,
    venue,
    maxAttendees,
  } = req.body;

    // Use the file data accordingly (e.g., store file path in the database)
    // const posterImage = fileData ? fileData.buffer.toString('base64') : undefined;


  // try {
    // Update the fields as needed
    const updatedEvent = await Event.findByIdAndUpdate(
      eventId,
      {
        eventName,
        description,
        hostedBy,
        price,
        category,
        posterImage,
        date,
        time,
        venue,
        maxAttendees,
      },
      { new: true }
    );

    res.json(updatedEvent);
  } catch (error) {
    console.error('Error updating event:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const addEvent = async (req, res) => {
  // Get file data from Multer
  const fileData = req.file;

  // Destructure fields from req.body
  const {
    eventName,
    description,
    hostedBy,
    price,
    category,
    posterImage = fileData ? fileData.buffer.toString('base64') : undefined,
    date,
    time,
    venue,
    maxAttendees,
  } = req.body;

 // Use the file data accordingly (e.g., store file path in the database)
//  const posterImage = fileData ? fileData.buffer.toString('base64') : undefined;


  try {
    // Create a new event with the provided fields
    const newEvent = new Event({
      eventName,
      description,
      hostedBy,
      price,
      category,
      posterImage,
      date,
      time,
      venue,
      maxAttendees,
    });

    // Save the new event
    const savedEvent = await newEvent.save();

    res.status(201).json(savedEvent);
  } catch (error) {
    console.error('Error adding event:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { getEvents, updateEvent, addEvent };
