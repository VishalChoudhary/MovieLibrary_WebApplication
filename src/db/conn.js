const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://vishal_chy01:B1Wc4sDOtfh1HsRe@cluster0.o8zayda.mongodb.net/?retryWrites=true&w=majority").then(()=> {
    console.log("Database Successfully connected");
}).catch((err)=>{
    console.log("Error connecting to Database");
    console.log(err)
})