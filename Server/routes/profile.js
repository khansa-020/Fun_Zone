const express = require('express');
const router = express.Router();
const { authMiddleWare } = require('../helpers/authMiddleware');
// const authMiddleware= require("../helpers/authMiddleware") ;

// const userProfile = require('../controllers/users/userProfile');
const {
    getAllUsers,
    // getAllSearchUsers,
    getUser,
    updateUser,
    deleteUser,
    followUser,
    UnFollowUser,
    addUser,
    removeUser,
    updateUserByAdmin,
 } = require('../controllers/users/userProfile');



// router.get('/user/profile', userProfile.getUserProfile);
// router.put('/user/update-profile', userProfile.updateUserProfile);

//Route getAllUsers, getSearch
router.get("/user/profile/", getAllUsers);
// router.get("/user/profile/search", getAllSearchUsers);


//Route UdateByAdmin
// router.get('/user/profile/:id/update',authMiddleWare, updateUserByAdmin);
router.get('/user/profile/:id/update', updateUserByAdmin);


// Route (get,update,delete) User 
router.get('/user/profile/:id', getUser)
router.put("/user/profile/:id", updateUser);
router.delete('/user/profile/:id', deleteUser)

// Route (followres,following,Add & Remove Follower)
router.put('/user/profile/:id/follow', followUser)
router.put('/user/profile/:id/unfollow', UnFollowUser)
router.put("/user/profile/:id/addstudent", addUser);
router.put("/user/profile/:id/removestudent",removeUser);



module.exports = router;
