//01--- import express:
import express from 'express';
//06-- import mongoose for db:
import mongoose from'mongoose';

//02--- create server:
const app = express();

// 09--- lkin essy req.body ka data work ni kr rha postman mai 
// ku k jb hum form ka data bejrhy thy tu tab hum log urlencoded middleware use kr rye thy
// lkin yahan hum json m data bejry hain tu we will use below Middleware:

// Using middleware:(to send req.body data)
app.use(express.json());


// --------------07--DB KA KAM START----------------------//

//Ab mai yahan pr database ko connect krogi like this:
mongoose.connect("mongodb://127.0.0.1:27017/", {
    dbName: "backendapi",
}).then(() => console.log("Database connected"))
.catch((e) => console.log(e));

//Define a User Schema:
const schema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
})

//Now, we'll create a model using the schema:

// Model ka name meny "User" dea hai and osko aleda variable User m store kea hai..
const user = mongoose.model('User', schema);   


// --------------DB KA KAM END HERE----------------------//


//04--
app.get('/', (req, res) => {
    res.send('Hello World!');  // when we go to localhost:4000 then it will show hello world! on the browser. 
})


//08 step mai me post method use krk data ko create krogi...
app.post('/users/new', async(req, res) => {
    // destructuring the data...
    const {name, email, password} = req.body;

    // await user.create({
    //     name: name,
    //     email: email,
    //     password: password,
    // })


    // destruture mai name, email, password same hai islye essy b likhskti o
    // ab iss sbk andr jo data ayega wo postman sy hi ayega..ku k yahan m API mai form use ni kr ri...
    // API sy data handle kr rhi o mai and wo hum log postman sy krty hain mostly...
    await user.create({
        name,
        email,
        password,
    })

    // response mai hum status, cookie wagaira b deskty hain like this:
    res.status(201).cookie("temp", "lol").json({
        success: true,
        message: "User added successfully"});
})

//09-- query mai sy data ko destructure:(by using /:id..with params:)
// aghr tu meny get use kra hau phr mai req.params ya req.query krogi and aghr tu meny 
// post use krna tu pjr mai req.body kr skti o..
// app.get("/userid/:id", async (req, res) => {
//     // destructuring the data...

//     // aghr tu body m data bejna hai tu ya tu post request kro ya fer aghr get krna hai tu phr req.query kro na k req.body

//     // and postman mai link essy diangy: http://localhost:5000/userid/678cf2a609e47dcafad82ccc
//     // id likhny k 2no tareky si hain...
//     const { id } = req.params;
//     // const id = req.params.id;
//     const userData = await user.findById(id);
//     // res.send(`The ID is: ${id}`);
//     res.json({
//         success: true,  
//         user: userData, 
//     })
// });

//09-- query mai sa id find krny klye(without using /:id.. with query)


app.get("/userid", async (req, res) => {
    // const id = req.query.id;
    // essy b destructure krskty hain:
    const {id} = req.query;
    const userData = await user.findById(id);
    
    res.json({
        success: true,
        // user: id,
        user: userData, 
        
    })
});


// ----------ye basicalyy extra step hai sary users ka data find krny klye kea hai meny-------
//10- Get data from API...(API PATH is: /users/all)
// and keep in mind k browser sy request hum get method sy e krty hain na k post...
app.get('/users/all', async(req, res) =>{
    // -------Param in Postman --------------------

    // jo params meny postman mai pass keye hain onko m yaahn acess kr skti o by using query..
    console.log(req.query);
    // and aghr m param m sy bs keyword ko chahtie hon tu i will do this:
    console.log(req.query.noor);
    //-----------------------------------------

    // step np 8: ye step db k bd wala hai..
    // mongodb k ab hmary ps kafi methods hain.. so i will use find() here to get the data of all users...
    // find k sath jo user hai ye wala user.find(),, ye user oper model wala hai.. and {} isk andr hum {name: "noor"} ye krskty hain tu wo noor nam k users k data ko find krk dedyga
    const users = await user.find({});
           //api k andr data json format mai bejty hain so did this:
        res.json({
            success: true,
            // and hum isk andr users pass krdygy empty array ki jagah
            // structure is: users: [],,,
            // users: users,
            // key value pairs same so essy b use krskty hain...
            users,
        });
});


//03--- listen on port 5000:
app.listen(5000, () => {
    console.log('Server is running on port 5000');
})
