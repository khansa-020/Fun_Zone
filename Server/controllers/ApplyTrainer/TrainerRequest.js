// controllers/trainerRequestController.js
const TrainerRequest = require('../../models/TrainerRequest');

const getTrainerRequests = async (req, res) => {
  try {
    const trainerRequests = await TrainerRequest.find();
    res.json(trainerRequests);
  } catch (error) {
    console.error('Error fetching trainer requests:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateTrainerRequest = async (req, res) => {
  const { trainerRequestId } = req.params;

  try {
    // Destructure fields from req.body
    const {
      personal,
      education,
      other,
    } = req.body;

    // Update the fields as needed
    const updatedTrainerRequest = await TrainerRequest.findByIdAndUpdate(
      trainerRequestId,
      {
        personal,
        education,
        other,
      },
      { new: true }
    );

    res.json(updatedTrainerRequest);
  } catch (error) {
    console.error('Error updating trainer request:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const addTrainerRequest = async (req, res) => {
  try {
    // Create a new trainer request with the provided fields
    const newTrainerRequest = new TrainerRequest(req.body);

    // Save the new trainer request
    const savedTrainerRequest = await newTrainerRequest.save();

    res.status(201).json(savedTrainerRequest);
  } catch (error) {
    console.error('Error adding trainer request:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { getTrainerRequests, updateTrainerRequest, addTrainerRequest };
