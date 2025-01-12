// Old way to import..
const mongoose = require('mongoose');
// New way to import..
import mongoose from 'mongoose';


//Now connect mongodb to Nodejs using mongoose...

// .then sy it will return a promise...
mongoose.connect(' mongodb://127.0.0.1:27017').then(() => {
    console.log("connected to MongoDB successfully");   
}).catch(err => console.log(err));


