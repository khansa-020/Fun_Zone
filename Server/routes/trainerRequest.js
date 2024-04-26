const express = require('express');
const router = express.Router();
const trainerRequest = require('../controllers/ApplyTrainer/TrainerRequest');


router.get('/trainer-requests', trainerRequest.getTrainerRequests);// Get all TrainerRequests
router.put('/trainer-requests/:trainerRequestId', trainerRequest.updateTrainerRequest);// Update TrainerRequest by ID
router.post('/trainer-requests', trainerRequest.addTrainerRequest);// Add new TrainerRequest


module.exports = router;
