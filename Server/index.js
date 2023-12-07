const express = require("express");
const cors= require("cors");

const userRoutes = require('./routes/user.js');

const app = express();
app.use(express.json());

app.use(cors());

require("./db/config");


app.use('/api/user', userRoutes);


app.listen(5000, () => {
  console.log("server is running");
});

// app.get("/", (req, res) => {
//   console.log("Server is running...");
// });