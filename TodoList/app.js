// Iss file k andr listerner hai and db ka listerner hai...
// lkin schema or model jo h na wo models mai user.js mai hai...
import express from 'express';
// import user.js here..
import userRouter from "../TodoList/routes/user.js";
// import task.js here:
import taskRouter from "../TodoList/routes/task.js";
// end mai jo env fil banae hai oska path b isk andr dena hai mjhy..
import { config } from 'dotenv';
import cookieParser from 'cookie-parser';

// export tb use krty hain jb next file mai import krna ho...
export const app = express();

config({
    path: './data/config.env'
})

// Middleware:(and middleware must use before userRouter)
app.use(express.json());
app.use(cookieParser());

// use userRouter:(and router ko hum log use hi islye krty hain ta k hum log prefix add krskain)
// jesy mai chahti o k routers/user k andr jutny b get post hain or onka jo b router hai hr 1 k start mai /users daldo 
// iss sy ye hoga k mjy manually ja k ni add krna pryga automatically add o jyega islye meny wahan sbsy remove krk yahan add krdea hai...
app.use("/api/v1/users" ,userRouter);
app.use("/api/v1/task", taskRouter);

app.get('/', (req, res) => {
    res.send('Hello World!');  
})

