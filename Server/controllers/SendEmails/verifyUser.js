// userController.js
const User = require("../../models/Users");

const findUserByUsernameAndEmail = async (username, email) => {
  try {
    const user = await User.findOne({ username, email });
    return (console.log('userfound'), user);
  } catch (error) {
    console.error('Error finding user:', error);
    throw error;
  }
};

const verifyUser = async (username, email) => {
  try {
    const user = await findUserByUsernameAndEmail(username, email);
    return user !== null; // Return true if user is found, false otherwise
  } catch (error) {
    console.error('Error verifying user:', error);
    throw error;
  }
};

module.exports = { verifyUser };
