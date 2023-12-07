// const express = require('express');
// const { UserController } = require('../controllers/users/userRegistration'); 
// const userLogin = require('../controllers/users/userLogin');  // Adjust this line
// const router = express.Router();
// require("../db/config")

// router.post("/userSignup", UserController.userRegistration);
// router.post('/userLogin', userLogin);

// module.exports = router;

const express = require('express');
const { UserController } = require('../controllers/users/userRegistration');
const userLogin = require('../controllers/users/userLogin').userLogin;  // Adjust this line
const router = express.Router();
require("../db/config")

router.post("/userSignup", UserController.userRegistration);
router.post('/userLogin', userLogin);

module.exports = router;
