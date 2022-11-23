const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/pr5").then(()=> {
    console.log("Database Successfully connected");
}).catch((err)=>{
    console.log("Error connecting to Database");
})