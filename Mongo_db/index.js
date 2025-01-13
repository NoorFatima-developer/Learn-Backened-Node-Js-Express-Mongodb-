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
// collection mnz hmy database ka koi kam nam rkhna prta hai...jesy meny yahan Students rkha hai 

const Students = new mongose.model("Students", students)

// 04--- Ab hum iss model k andr data barhain gy...and oss saray daata ko kisi func m wrap krdaingy ta k end m ossy hum call krskain...

// OLD WAY...(Long way...)
// const adder = async () => {
//     const ss = new Students({
//         name: "Noor",
//         age: 22,
//         workout: true
//     })
//     // hum await lagaye  k jbtk ye save krk koi promise true ya false return na kry tb tk klye agly kam rok do or isko
//     // agy move na krna...
//     await ss.save();
// }


// NEW WAY(Short way...)

// i------ create data...
const adder = async () => {
    const ss = await Students.create({
        name: "Fatimaaaaaaaa",
        age: 22,
        workout: true
    })
    // essy hum jitnay mrzi bana k data brh skty hain...
    const ss1 = await Students.create({
        name: "Fatimaaaaaaaa",
        age: 23,
        workout: true
    })
}

adder();

// ii------- find data...

const findData = async () => {
    // ==========ye sary objects ko screen pr dekha daiga..
    // const sss = await Students.find();
    // ==========ab mjy bs wo dekhao jiski age 23 hai..
    // const sss = await Students.find({age: {$eq: 23}});
    // ==========ab mjy wo dekhao jiski height 23 sy greater hai...
    const sss = await Students.find({age: {$gt: 23}});
    console.log(sss);
}

// eq => equal to, gt => greater than, le => less than, gte => greater than or equal to, lse => less than or equal to...

findData();