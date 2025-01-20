import { user } from "../models/user.js";
import bcrypt from bcrypt;

// post:(for registration)
export const register = async(req, res) => {    // destruturing:
    const { name, email, password} = req.body;

    // const user = await user.findOne({ email: email});
    // key value pair ko essy b likh skty hain:
    const user = await user.findOne({ email: email});

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

// post:(for login)
export const login = async(req, res) => {    // destruturing:
    const {email, password} = req.body;
    await user.create({
        email,
        password,
    })
    res.json({
        success: true,
        message: "User login successfully",
    })
};



// get:
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

// get:
export const getUserid = async(req, res) => {
    const {id} = req.query;
    const userdata = await user.findById(id);

    res.json({
        success: true,
        user: userdata,
    })
};