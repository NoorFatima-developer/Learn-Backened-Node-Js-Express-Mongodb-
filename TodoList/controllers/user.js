import { User } from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { sendCookie } from "../utils/features.js";

// post:(for registration)
export const register = async(req, res) => {    // destruturing:
    const { name, email, password} = req.body;

    // const user = await user.findOne({ email: email});
    // key value pair ko essy b likh skty hain:

    // register mai wo user create krny sy pehly check kryga k user already exist tu ni kr rha or wo email sy verify kryga...
  
    let user = await User.findOne({ email: email});
    if(user){
        return res.status(400).json({
            success: false,
            message: "User already exists",
        })
    }
    // lkin password hash ki form mai secure krk bejna hai tu i will do this:
    const hashedPassword = await bcrypt.hash(password, 10);

    user = await User.create({
        name,
        email,
        password: hashedPassword,
    })

    // aghr tu m chahti o register successfuly hony k bd wo lpgin page pr redurect krjye tu i can use cookie for that:
    // and cookies mai token secure form mai bejny klye we use jsonwebtoken...
    // and cookie ka nam "token" hai and ab oss token ki value hum khud manual b deskty hain
    // but hum wo value daaingy jo user k data k lehaz sy hr dfa change ho tu chlo token create krty hain..
    // otherwise message hi thek hai...

    // ab yahan jo meny token create kea hai na osko me resue b krsko islye meny aleda file m bana dea hai
    // utilities k folder k andr features.js k andr..

    sendCookie(user, res, "Registered Successfully", 201)
};

// post:(for login)
export const login = async(req, res) => {    
    // destruturing:
    const {email, password} = req.body;

    // meny models m user.js mai password field mai select false kea hai... islye yahan manually password set krna hoga..
    let user = await User.findOne({ email: email});
    if(!user){
        return res.status(400).json({
            success: false,
            message: "Invalid email and password",
        })
    }

    const isMatch = await bcrypt.compare(password, user.password);
};

// get:
export const getAllUsers = async(req, res) => {
   const users = await User.find({});

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