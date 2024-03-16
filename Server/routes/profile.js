const express = require('express');
const router = express.Router();
// const userProfile = require('../controllers/users/userProfile');
const { getUser, updateUser, deleteUser, followUser, UnFollowUser } = require('../controllers/users/userProfile');

// import { deleteUser, followUser, getUser, UnFollowUser, updateUser } from "../Controllers/UserController.js";


// Route to get user profile
// router.get('/user/profile', userProfile.getUserProfile);

// Route to update user profile
// router.put('/user/update-profile', userProfile.updateUserProfile);

// Route to get ,update, delete user 
router.get('/user/profile/:id', getUser)
router.put('/user/profile/:id', updateUser)
router.delete('/user/profile/:id', deleteUser)

// Route for followres and following
router.put('/user/profile/:id/follow', followUser)
router.put('/user/profile/:id/unfollow', UnFollowUser)

module.exports = router;
