// Ab jo b app.get nd app.set k andr functions thy na routes/user mai meny wo sary
// iss separate controller/user wali file mai rkhdeye hain...

import { user } from "../models/user.js";

export const getAllUsers = async(req, res) =>{
    // -------Param in Postman --------------------
    console.log(req.query);
    console.log(req.query.noor);
    //-----------------------------------------
    const users = await user.find({});
        res.json({
            success: true,
            users,
        });
}


export const register = async(req, res) => {
    const {name, email, password} = req.body;
    await user.create({
        name,
        email,
        password,
    })
    res.status(201).cookie("temp", "lol").json({
        success: true,
        message: "User added successfully"});
}



export const param_id = async (req, res) => {
    const { id } = req.params;
    const userData = await user.findById(id);
    // res.send(`The ID is: ${id}`);
    res.json({
        success: true,  
        user: userData, 
    })
}

export const query_id = async (req, res) => {
    // const id = req.query.id;
    // essy b destructure krskty hain:
    const {id} = req.query;
    const userData = await user.findById(id);
    
    res.json({
        success: true,
        // user: id,
        user: userData, 
        
    })
}