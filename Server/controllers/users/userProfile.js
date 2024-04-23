const User = require('../../models/Users'); 
const bcrypt = require('bcrypt');

// // Get user profile
// const getUserProfile = async (req, res) => {
//   try {
//     const userId = req.user.id;
//     const userProfile = await User.findById(userId);
//     if (!userProfile) {
//       return res.status(404).json({ message: 'User profile not found' });
//     }

//     // Return user profile as JSON response
//     res.json(userProfile);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// };

// // Update user profile
// const updateUserProfile = async (req, res) => {
//   try {
//     const userId = req.user.id;
//     // Extract updated profile data from the request body
//     const { username, email, livesIn, education, skills, workStatus, worksAt } = req.body;
//     // Update user profile in the database
//     const updatedProfile = await User.findByIdAndUpdate(
//       userId,
//       { username, email, livesIn, education, skills, workStatus, worksAt },
//       { new: true } // Return the updated document
//     );

//     if (!updatedProfile) {
//       return res.status(404).json({ message: 'User profile not found' });
//     }

//     // Return the updated user profile as JSON response
//     res.json(updatedProfile);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// };



// get a User
const getUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findById(id);

    if (user) {
      const { password, ...otherDetails } = user._doc;

      res.status(200).json(otherDetails);
    } else {
      res.status(404).json("No such user exists");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// update a user
const updateUser = async (req, res) => {
  const id = req.params.id;
  const { currentUserId, currentUserAdminStatus, password } = req.body;

  if (id === currentUserId || currentUserAdminStatus) {
    try {
      if (password) {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(password, salt);
      }

      const user = await User.findByIdAndUpdate(id, req.body, {
        new: true,
      });

      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("Access Denied! you can only update your own profile");
  }
};

// Delete user
 const deleteUser = async (req, res) => {
  const id = req.params.id;

  const { currentUserId, currentUserAdminStatus } = req.body;

  if (currentUserId === id || currentUserAdminStatus) {
    try {
      await User.findByIdAndDelete(id);
      res.status(200).json("User deleted successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("Access Denied! you can only delete your own profile");
  }
};

// Follow a User
const followUser = async (req, res) => {
  const id = req.params.id;

  const { currentUserId } = req.body;

  if (currentUserId === id) {
    res.status(403).json("Action forbidden");
  } else {
    try {
      const followUser = await User.findById(id);
      const followingUser = await User.findById(currentUserId);

      if (!followUser.followers.includes(currentUserId)) {
        await followUser.updateOne({ $push: { followers: currentUserId } });
        await followingUser.updateOne({ $push: { following: id } });
        res.status(200).json("User followed!");
      } else {
        res.status(403).json("User is Already followed by you");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
};

// UnFollow a User
const UnFollowUser = async (req, res) => {
  const id = req.params.id;

  const { currentUserId } = req.body;

  if (currentUserId === id) {
    res.status(403).json("Action forbidden");
  } else {
    try {
      const followUser = await User.findById(id);
      const followingUser = await User.findById(currentUserId);

      if (followUser.followers.includes(currentUserId)) {
        await followUser.updateOne({ $pull: { followers: currentUserId } });
        await followingUser.updateOne({ $pull: { following: id } });
        res.status(200).json("User Unfollowed!");
      } else {
        res.status(403).json("User is not followed by you");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
};

// module.exports = {
//   getUserProfile,
//   updateUserProfile,
// };
module.exports = {
  deleteUser, followUser, getUser, UnFollowUser, updateUser,
};
