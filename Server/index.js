const express = require("express");
const app = express();

app.get("/", (req, res)=>{
  res.send("App i working")
})

app.listen(5000);