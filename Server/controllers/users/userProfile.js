const User = require('../../models/Users'); 
const TrainerModel =require('../../models/Trainer');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { request } = require('express');


// get all users
const getAllUsers = async (req, res) => {
  try {
      let users = await User.find({ isAdministrator: false });
      users = users.map((user) => {
          const { password, ...otherDetails } = user._doc;
          return otherDetails;
      });
      res.status(200).json(users);
  } catch (error) {
      console.error("Error fetching all users:", error.message);
      res.status(500).json({ error: "Server error" });
  }
};

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
// const updateUser = async (req, res) => {
//   const id = req.params.id;
//   const { currentUserId, currentUserAdminStatus, password } = req.body;

//   if (id === currentUserId || currentUserAdminStatus) {
//     try {
//       if (password) {
//         const salt = await bcrypt.genSalt(10);
//         req.body.password = await bcrypt.hash(password, salt);
//       }

//       const user = await User.findByIdAndUpdate(id, req.body, {
//         new: true,
//       });

//       res.status(200).json(user);
//     } catch (error) {
//       res.status(500).json(error);
//     }
//   } else {
//     res.status(403).json("Access Denied! you can only update your own profile");
//   }
// };



const updateUser = async (req, res) => {
  const id = req.params.id;
  console.log("Data Received", req.body)

  const { _id, currentUserAdmin, password } = req.body;

  if (id === _id) {
    try {
      if (password) {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(password, salt);
      }
      const user = await User.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      const token = jwt.sign(
        {email: user.email,
          id: user._id,
        },process.env.JWT_SECRET_KEY,
        { expiresIn: "1h" }
      );
      res.status(200).json({ user, token });
    } catch (error) {
      console.error("Error updating user by user:", error.message);
      res.status(500).json({ error: "Server error" });
    }
  } else {
    res.status(403).json("Access Denied! you can only update your own profile");
  }
};


//Update User by Admin
const updateUserByAdmin = async (req, res) => {
  const id = req.params.id;
    console.log("Data Received", req.body)

  const { _id, currentUserAdmin, password } = req.body;

  try {
    if (password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(password, salt);
    }

    const user = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    const token = jwt.sign(
      {
        email: user.email,
        id: user._id,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1h" }
    );

    res.status(200).json({ user, token });
  } catch (error) {
    console.error("Error updating user by admin:", error.message);
    res.status(500).json({ error: "Server error" });
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


//Add Student to user's list of followers
// const addUser = async (req, res) => {
//     try {
//         const user = await User.findById(req.params.id);
//         const studentId = req.body.studentId;
//         if (!user) {
//             return res.status(404).json({ error: "User not found" });
//         }
//         // Check if studentId already exists in mystudents array
//         if (user.mystudents.includes(studentId)) {
//             return res.status(400).json({ error: "Student already added" });
//         }
//         user.mystudents.push(studentId);
//         await user.save();
//         res.status(200).json(user);
//     } catch (error) {
//         console.error("Error adding student to user:", error.message);
//         res.status(500).json({ error: "Server error" });
//     }
// };


const addUser = async (req, res) => {
  try {
      const user = await User.findById(req.params.id);
      if (!user) {
          return res.status(404).json({ error: "User not found" });
      }
      // Accessing the studentId from the request body
      const { studentId } = req.body;
      // Initialize mystudents array if it doesn't exist
      if (!user.mystudents) {
          user.mystudents = [];
      }
      // Check if studentId is already included in mystudents array
      if (user.mystudents.includes(studentId)) {
          return res.status(400).json({ error: "Student already added" });
      }
      // Add the studentId to mystudents array
      user.mystudents.push(studentId);
      await user.save();
      res.status(200).json(user);
  } catch (error) {
      console.error("Error adding student to user:", error.message);
      res.status(500).json({ error: "Server error" });
  }
};


// Remove Student from user's list of follower(students)
const removeUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const studentId = req.body.studentId;
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        // Check if studentId exists in mystudents array
        if (!user.mystudents.includes(studentId)) {
            return res.status(400).json({ error: "Student not found" });
        }
        user.mystudents = user.mystudents.filter(id => id !== studentId);
        await user.save();
        res.status(200).json(user);
    } catch (error) {
        console.error("Error removing student from user:", error.message);
        res.status(500).json({ error: "Server error" });
    }
};


//Get all search users
const getAllSearchUsers = async (req, res) => {
  const keyword = req.query.search
    ? {
        $or: [
          { username: { $regex: req.query.search, $options: "i" } },
          { email: { $regex: req.query.search, $options: "i" } }, // i means case insensitive
        ],
      }
    : {};
  const users = await User.find(keyword);
  res.send(users);
};

//Apply For Trainer
const addTrainer = async (req, res) => {
  try {
    const newTrainer = await TrainerModel({
      ...req.body,
      status: "pending",
    });
    await newTrainer.save();
    const administrator = await User.findOne({ isAdministrator: true });

    if (administrator && administrator.notification) {
      const notification = administrator.notification;
      notification.push({
        type: "apply-trainer-request",
        message: `${newTrainer.username} with email ${newTrainer.email} has applied for a Trainer Account`,
        data: {
          trainerId: newTrainer._id,
          name: newTrainer.username,
          onClickPath: "/administrator/trainers",
        },
      });
      await User.findByIdAndUpdate(administrator._id, { notification });
    }
    res.status(201).send({
      success: true,
      message: "Trainer Account Applied Successfully!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};





module.exports = {
  getAllUsers, deleteUser, getUser, updateUser, followUser, UnFollowUser, addUser, removeUser ,
  updateUserByAdmin, getAllSearchUsers, addTrainer
};
