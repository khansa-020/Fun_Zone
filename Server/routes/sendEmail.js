// contactRoutes.js
const express = require('express');
const router = express.Router();

//const { SendEmail } = require('../controllers/SendEmails/SendEmail');
const SendEmail = require('../controllers/SendEmails/SendEmail').SendEmail;  // Adjust this line

//const {verifyUser} =require('../controllers/SendEmails/verifyUser')

require("../db/config")
router.post('/contact', SendEmail);


module.exports = router;
