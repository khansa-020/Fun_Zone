const express = require("express");
const router = express.Router();

const {
  deleteAppointement,
  getSupById,
  getSupervisor,
  supervisorAppointments,
  updateAppointmentStatus,
  updateSupervisor,
} = require("../controllers/users/TrainerController");


// // Get single supervisor info
// router.post("/getsupervisor", getSupervisor);

// // Update supervisor profile
// router.post("/updatesupervisor",  updateSupervisor);

// // Get single supervisor info
// router.post("/getsupbyid",  getSupById);
// router.post("/supervisorappointments", supervisorAppointments);
// router.post("/updateappointmentstatus", updateAppointmentStatus);
// router.delete("/:id/deleteappointment",  deleteAppointement);




module.exports = router;
