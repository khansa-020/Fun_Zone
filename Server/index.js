const express = require("express");
const app = express();

const mongoose = require('mongoose');

const DB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/FunZone", {
    });
    console.log("Connection Successful");
  } catch (error) {
    console.error("Connection Error:", error.message);
  }
};

// Call the DB function to establish the connection
DB();

app.get("/", (req, res) => {
  res.send("App is working");
  console.log("Server is running");
});

app.listen(5000);

