const mongoose = require('mongoose');
const DB = "mongodb://0.0.0.0:27017/Fun_Zone";

if(!DB){
    console.error("MongoDB URI is not defined");
    process.exit(1);
}

mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connection successful...");
    })
    .catch(err => {
        console.error("Connection failed:", err);
    });

