const express = require('express');
const { UserController } = require('../controllers/users/userRegistration'); 
const userLogin = require('../controllers/users/userLogin');  // Adjust this line
const router = express.Router();
//require("../db/connection")

router.post("/userSignup", UserController.userRegistration);
router.post('/userLogin', userLogin);

module.exports = router;

