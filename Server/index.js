const express = require("express");
const app = express();
require("./db/config")
const User= require("./User");

app.use(express.json())
app.post("/",(req, res) => {
  //let user=new User(req.body);
  //let result=await user.save();
  res.send(req.body);
  console.log("Server is running...");
});

app.listen(5000);

// app.use(express.json())
// app.post("/", async(req, res) => {
//   let user=new User(req.body);
//   let result=await user.save();
//   res.send(result);
//   console.log("Server is running...");
// });

// app.listen(5000);