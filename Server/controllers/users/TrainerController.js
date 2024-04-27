// const MeetingModel = require("../Models/MeetingModel.js");
const TrainerModel = require("../../models/Trainer");
// const User = require("../Models/UserModel.js");

const getTrainer = async (req, res) => {
  try {
    const trainer = await TrainerModel.findOne({
      userId: req.body.userId,
    });
    console.log("Data Received", req.body)

    res.status(200).send({
      success: true,message: "Trainer data fetched Successfully!", data: trainer,
    });
  } catch (error) {
    res.status(500).send({
      success: false, message: "Error while fetching Trainer Info", error,
    });
  }
};


//UPDATE TRAINER
const updateTrainer = async (req, res) => {
  try {
    const trainer = await TrainerModel.findOneAndUpdate(
      { userId: req.body.userId },
      req.body
    );
    res.status(201).send({
      success: true,
      message: "Trainer Profile updated Successfully!",
      data: trainer,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error while updating Trainer Info",
      error,
    });
  }
};


//GET TRAINER BY ID
const getTraById = async (req, res) => {
  try {
    const trainer = await TrainerModel.findOne({
      _id: req.body.trainerId,
    });
    res.status(200).send({
      success: true,
      message: "Trainer Info fetched Successfully!",
      data: trainer,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error while fetching Trainer Info",
      error,
    });
  }
};


//TRAINER APPOINTMENTS
// const trainerAppointments = async (req, res) => {
//   try {
//     const trainer = await TrainerModel.findOne({
//       userId: req.body.userId,
//     });
//     const appointments = await MeetingModel.find({
//       trainerId: trainer._id,
//     });
//     res.status(200).send({
//       success: true,
//       message: "Trainer Meeting Appointments fetched Successfully!",
//       data: appointments,
//     });
//   } catch (error) {
//     res.status(500).send({
//       success: false,
//       message: "Error while fetching Trainer Appointments",
//       error,
//     });
//   }
// };


// UPDATE APPOINMENT STATUS
// const updateAppointmentStatus = async (req, res) => {
//   try {
//     const { appointmentsId, status } = req.body;
//     const appointments = await MeetingModel.findByIdAndUpdate(appointmentsId, {
//       status,
//     });
//     const user = await User.findOne({ _id: appointments.userId });
//     const notification = user.notification;
//     notification.push({
//       type: "Status-updated",
//       message: `Meeting Appointment has been ${status}`,
//       onClickPath: "/supervisorappointments",
//     });
//     await user.save();
//     res.status(200).send({
//       success: true,
//       message: "Meeting Appointments status Updated Successfully!",
//       // data: appointments,
//     });
//   } catch (error) {
//     res.status(500).send({
//       success: false,
//       message: "Error while updating Appointment's Status!",
//       error,
//     });
//   }
// };


//DELETE APPOINTMENT
// const deleteAppointement = async (req, res) => {
//   try {
//     const deletedProject = await MeetingModel.findByIdAndDelete(req.params.id);
//     res.status(200).send({
//       success: true,
//       message: "Appointment deleted successfully!",
//       project: deletedProject,
//     });
//   } catch (error) {
//     res.status(500).send({
//       success: false,
//       message: "Error while Deleting Appointment!",
//       error,
//     });
//   }
// };

module.exports = {
  getTrainer,
  updateTrainer,
  getTraById
};
