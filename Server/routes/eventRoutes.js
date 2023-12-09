// routes/eventRoutes.js
const express = require('express');
const router = express.Router();
const eventController = require('../controllers/Events/UpdateEvents');

require("../db/config")
router.post('/add-event', eventController.addEvent);
router.get('/get-events', eventController.getEvents);
router.put('/update-event/:eventId', eventController.updateEvent);

module.exports = router;
