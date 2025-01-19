// iss file k andr mai routes banaogi in API..
// and apna sara main code iss file m rkhogi mai...get post wagaira
// and routers ko create krogi and export krogi...
// and models mai o user.js k andr jo schema or model hai osko b import krlogi..

import express from 'express';
import { user } from '../models/user';

// 01--create router:
const router = express.Router();

app.post('/users/new', async(req, res) => {
    const {name, email, password} = req.body;
    await user.create({
        name,
        email,
        password,
    })
    res.status(201).cookie("temp", "lol").json({
        success: true,
        message: "User added successfully"});
})

app.get('/users/all', async(req, res) =>{
    // -------Param in Postman --------------------
    console.log(req.query);
    console.log(req.query.noor);
    //-----------------------------------------
    const users = await user.find({});
        res.json({
            success: true,
            users,
        });
});

app.get("/userid/:id", async (req, res) => {
    const { id } = req.params;
    const userData = await user.findById(id);
    // res.send(`The ID is: ${id}`);
    res.json({
        success: true,  
        user: userData, 
    })
});

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


// 02--export router:
export default router;