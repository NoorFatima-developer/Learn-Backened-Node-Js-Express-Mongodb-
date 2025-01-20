import { user } from "../models/user.js";

export const getAllUsers = async(req, res) => {
   const users = await user.find({});

   //aghr meny postman mai params mai name keyword rkha hai will use keyword otherwise whi name jo rkha hai...
   const keyword = req.query.keyword;
   console.log(keyword);

   res.json({
    success: true,
    users: users,
   })
   
}

export const register = async(req, res) => {
   
    // destruturing:
    const { name, email, password} = req.body;
    
    await user.create({
        name,
        email,
        password,
    })

    res.status(201).cookie("tempi", "lol").json({
        success: true,
        message: "User registered successfully",
    })
};