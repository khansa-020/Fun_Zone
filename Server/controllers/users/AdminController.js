const User = require('../../models/Users'); 
const TrainerModel = require( "../../models/Trainer.js");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({
      isAdministrator: false,
      isTrainer: false,
    });
    res.status(200).send({
      success: true,
      message: "Users data list",
      data: users,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error while fetching Users data",
      error,
    });
  }
};

const getAllTrainers = async (req, res) => {
  try {
    const trainers = await TrainerModel.find({});
    res.status(200).send({
      success: true,
      message: "Supervisors data list",
      data: trainers,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "error while fetching Supervisors data!",
      error,
    });
  }
};

const getAllStudents = async (req, res) => {
  try {
    const trainers = await User.find({
      isTrainer: false,
      isAdministrator: false,
    });
    res.status(200).send({
      success: true,
      message: "Students data list",
      data: trainers,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error while fetching Students data!",
      error,
    });
  }
};

const getAllTrainedStudents = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    const addedUserIds = user.mystudents;
    const addedUsers = await User.find({ _id: { $in: addedUserIds } });
    res.json(addedUsers);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const getAllApprovedTrainers = async (req, res) => {
  try {
    const trainers = await TrainerModel.find({ status: "approved" });
    res.status(200).send({
      success: true,
      message: "Instructors data list",
      data: trainers,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "error while fetching Trainers data!",
      error,
    });
  }
};

const changeAccountStatus = async (req, res) => {
  try {
    const { trainerId, status } = req.body;
    const trainer = await TrainerModel.findByIdAndUpdate(trainerId, {
      status,
    });
    const user = await User.findOne({ _id: trainer.userId });
    const notification = user.notification;
    notification.push({
      type: "Trainer-account-request-updated",
      message: `Your Trainer Account Request has been ${status}`,
      onClickPath: "/notification",
    });
    user.isTrainer = status === "approved" ? true : false;
    await user.save();
    res.status(201).send({
      success: true,
      message: "Account Status Updated!",
      data: trainer,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in Account Status",
      error,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    res.status(200).send({
      success: true,
      message: "Record Deleted Successfully!",
      project: deletedUser,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error while Deleting Record!",
      error,
    });
  }
};

const deleteTrainer = async (req, res) => {
  try {
    const deletedTrainer = await TrainerModel.findByIdAndDelete(
      req.params.id
    );
    if (deletedTrainer) {
      const deletedUser = await User.findByIdAndDelete(
        deletedTrainer.userId
      );
      res.status(200).send({
        success: true,
        message: "Record Deleted Successfully!",
        user: deletedUser,
        trainer: deletedTrainer,
      });
    } else {
      res.status(404).send({
        success: false,
        message: "Trainer not found!",
      });
    }
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error while Deleting Record!",
      error,
    });
  }
};

const deleteTrainerRequest = async (req, res) => {
  try {
    const deletedProject = await TrainerModel.findByIdAndDelete(
      req.params.id
    );
    res.status(200).send({
      success: true,
      message: "Request Deleted Successfully!",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error while Deleting Request!",
      error,
    });
  }
};




module.exports = {
    getAllUsers,
    getAllTrainers,
    getAllStudents,
    getAllTrainedStudents,
    getAllApprovedTrainers,
    changeAccountStatus,
    deleteUser,
    deleteTrainer,
    deleteTrainerRequest,
  };

