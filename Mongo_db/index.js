// Old way to import..
// const mongoose = require('mongoose');
// New way to import..
import mongose from 'mongoose';


//01---Now connect mongodb to Nodejs using mongoose...

// .then sy it will return a promise...
// mongose.connect('mongodb://127.0.0.1:27017', {useNewURLParser: true, useUnifiedTopology: true}).then(() => {
//     console.log("connected to MongoDB successfully");   
// }).catch(err => console.log(err));

mongose.connect('mongodb://127.0.0.1:27017/Sample').then(() => {
    console.log("connected to MongoDB successfully");   
}).catch(err => console.log(err));


// Ab isk andr humy model or schema pehly sy khud e banana hoga ta k hum crud operations 
// perform krskain ku k isk andr crud operations different hoty trhan sy hoty hain..shell or compass ki trhan ni...


//02-- Create Schema...

const students = new mongose.Schema({
    name: String,
    age: Number,
    workout: Boolean
})

//03-- Create Model...(Model is like a collection in mongodb)

const Students = new mongose.model("Students", students)


// 04--- Ab hum iss model k andr data barhain gy...

const ss = new Students({
    name: "Noor",
    age: 22,
    workout: true
})