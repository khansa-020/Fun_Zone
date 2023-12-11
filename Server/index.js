const express = require("express");
//const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors= require("cors");
require('dotenv').config();


const userRoutes = require('./routes/user.js');
const eventRoutes = require('./routes/eventRoutes');
const contactRoutes = require('./routes/sendEmail.js');

const app = express();
app.use(express.json());
app.use(cors());


// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



require("./db/config");

app.use('/api/user', userRoutes);
app.use('/api', eventRoutes);
app.use('/api',contactRoutes);


app.listen(5000, () => {
  console.log("server is running");
});

// app.get("/", (req, res) => {
//   console.log("Server is running...");
// });