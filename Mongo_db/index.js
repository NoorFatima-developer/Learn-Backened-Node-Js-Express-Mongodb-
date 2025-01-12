// Old way to import..
const mongoose = require('mongoose');
// New way to import..
import mongoose from 'mongoose';


//Now connect mongodb to Nodejs using mongoose...

mongoose.connect('mongodb://localhost:').then(() => {
    console.log("connected to MongoDB successfully");   
}) 

