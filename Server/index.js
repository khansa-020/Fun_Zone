const express = require("express");
const cors= require("cors");
const app = express();
require("./db/config")
const User= require("./models/User");

app.use(express.json())
app.use(cors());
app.post("/", async(req, res) => {
  let user=new User(req.body);
  let result=await user.save();
  res.send(result);
  console.log("Server is running...");
});

app.listen(5000);