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


// ----------ye basicalyy extra step hai sary users ka data find krny klye kea hai meny-------
//9- Get data from API...(API PATH is: /users/all)
// and keep in mind k browser sy request hum get method sy e krty hain na k post...
app.get('/users/all', async(req, res) =>{

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



//03--- listen on port 4000:
app.listen(5000, () => {
    console.log('Server is running on port 5000');
})
