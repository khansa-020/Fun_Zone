const express = require('express');
const router = express.Router();
const trainerRequest = require('../controllers/ApplyTrainer/TrainerRequest');

// Get all TrainerRequests
router.get('/trainer-requests', trainerRequest.getTrainerRequests);

// Update TrainerRequest by ID
router.put('/trainer-requests/:trainerRequestId', trainerRequest.updateTrainerRequest);

// Add new TrainerRequest
router.post('/trainer-requests', trainerRequest.addTrainerRequest);

module.exports = router;
