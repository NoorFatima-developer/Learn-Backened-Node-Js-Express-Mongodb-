// Iss file k andr listerner hai and db ka listerner hai...
// lkin schema or model jo h na wo models mai user.js mai hai...

import express from 'express';
import mongoose from'mongoose';
// import user.js here..
import userRouter from "../NodeAPI/routes/user.js"

const app = express();

// Middleware:
app.use(express.json());
// use userRouter:

app.use(userRouter);

// DB connection:
mongoose.connect("mongodb://127.0.0.1:27017/", {
    dbName: "backendapi",
}).then(() => console.log("Database connected"))
.catch((e) => console.log(e));


app.get('/', (req, res) => {
    res.send('Hello World!');  
})

//03--- listen on port 5000:
app.listen(4000, () => {
    console.log('Server is running on port 5000');
})
