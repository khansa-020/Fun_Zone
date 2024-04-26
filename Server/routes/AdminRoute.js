const express = require('express');
const router = express.Router();

const {
  changeAccountStatus,
  deleteTrainer,
  deleteTrainerRequest,
  deleteUser,
  getAllApprovedTrainers,
  getAllStudents,
  getAllTrainedStudents,
  getAllTrainers,
  getAllUsers,
  totalStudents,
  totalTrainers,
} = require('../controllers/users/AdminController.js');

// const authMiddleware = require("../Middleware/authMiddleware.js");


router.get("/getallusers",  getAllUsers);
router.get("/getallstudents",  getAllStudents);
router.get("/:id/getalltrastudents", getAllTrainedStudents);
router.get("/getalltrainers",  getAllTrainers);
router.get("/getallapprovedtrainers",  getAllApprovedTrainers);
router.post("/changeaccountstatus",  changeAccountStatus);
router.get("/students/count", totalStudents);
router.get("/trainers/count", totalTrainers);


router.delete("/:id/deleteuser", deleteUser);
router.delete("/:id/deletetrainer",  deleteTrainer);
router.delete("/:id/deleterequest", deleteTrainerRequest);



module.exports = router;





















// import express from "express";
// import {
//   approveProjectForShowcase,
//   changeAccountStatus,
//   deleteProject,
//   deleteSupervisor,
//   deleteSupervisorRequest,
//   deleteUser,
//   getAllApprovedProjects,
//   getAllApprovedSupervisors,
//   getAllDigitalArtsProjects,
//   getAllGamingProjects,
//   getAllProjects,
//   getAllStudents,
//   getAllSupervisedStudents,
//   getAllSupervisors,
//   getAllUsers,
//   getProjectsByCategories,
//   getProjectsByCategoriesPieChart,
//   getProjectsCretedPerMonth,
//   totalProjectsDigitalArts,
//   totalProjectsGaming,
//   totalStudents,
//   totalSupervisors,
//   userAppointmentsList,
// } from "../Controllers/AdminController.js";
// import authMiddleware from "../Middleware/authMiddleware.js";

// const router = express.Router();

// router.get("/getallusers", authMiddleware, getAllUsers);
// router.get("/getallstudents", authMiddleware, getAllStudents);
// router.get("/:id/getallsupstudents", authMiddleware, getAllSupervisedStudents);
// router.get("/getallsupervisors", authMiddleware, getAllSupervisors);
// router.get("/getallapprovedsupervisors", authMiddleware, getAllApprovedSupervisors);
// router.post("/userappointmentslist", authMiddleware, userAppointmentsList);
// router.post("/changeaccountstatus", authMiddleware, changeAccountStatus);
// router.get("/students/count", authMiddleware, totalStudents);
// router.get("/supervisors/count", authMiddleware, totalSupervisors);
// router.get("/gamedevelopment/count", authMiddleware, totalProjectsGaming);
// router.get("/digitalarts/count", authMiddleware, totalProjectsDigitalArts);

// router.get("/getallgamingprojects", authMiddleware, getAllGamingProjects);
// router.get("/getalldigitalartsprojects", authMiddleware, getAllDigitalArtsProjects);
// router.get("/getprojectscreatedpermonth", authMiddleware, getProjectsCretedPerMonth);
// router.get("/getprojectsbycatgory", authMiddleware, getProjectsByCategories);
// router.get("/getprojectsbycatgorypercentage", authMiddleware, getProjectsByCategoriesPieChart);
// router.get("/getallprojects", authMiddleware, getAllProjects);
// router.delete("/:id/deleteproject", authMiddleware, deleteProject);
// router.delete("/:id/deleteuser", authMiddleware, deleteUser);
// router.delete("/:id/deletesupervisor", authMiddleware, deleteSupervisor);
// router.delete("/:id/deleterequest", authMiddleware, deleteSupervisorRequest);
// router.put("/:id/changeprojectstatus", authMiddleware, approveProjectForShowcase);
// router.get("/getallapprovedprojects", authMiddleware, getAllApprovedProjects);

// export default router;
