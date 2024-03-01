const express = require("express");
const multer = require('multer');
const cors= require("cors");
//const dotenv = require('dotenv');
const bodyParser = require('body-parser');
require('dotenv').config();
require("./db/config");


const userRoutes = require('./routes/user.js');
const eventRoutes = require('./routes/eventRoutes');
const contactRoutes = require('./routes/sendEmail.js');
const profileRoutes =require('./routes/profile.js');
const trainerRequest = require('./routes/trainerRequest');
const chatRoomRoutes = require('./routes/chatRoom');


//configuration
const upload = multer();
const app = express();

//MiddleWares
app.use(express.json());
app.use(cors());

//Multer middleware for handle_file 
app.use(upload.single('posterImage'));

// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//APIs
app.use('/api/user', userRoutes);
app.use('/api', eventRoutes);
app.use('/api',contactRoutes);
app.use('/api', profileRoutes);
app.use('/api', trainerRequest);
app.use('/api', chatRoomRoutes);


app.listen(5000, () => {
  console.log("server is running");
});

