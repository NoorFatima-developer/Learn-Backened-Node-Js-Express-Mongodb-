import { user } from "../models/user.js";
import bcrypt from bcrypt;

// post:(for registration)
export const register = async(req, res) => {    // destruturing:
    const { name, email, password} = req.body;

    // const user = await user.findOne({ email: email});
    // key value pair ko essy b likh skty hain:

    // register mai wo user create krny sy pehly check kryga k user already exist tu ni kr rha or wo email sy verify kryga...
  
    const user = await user.findOne({ email: email});
    if(user){
        return res.status(400).json({
            success: false,
            message: "User already exists",
        })
    }

    // lkin password hash ki form mai secure krk bejna hai tu i will do this:
    const hashedPassword = await bcrypt.hash(password, 10);

    await user.create({
        name,
        email,
        password: hashedPassword,
    })
    // aghr tu m chahti o register successfuly hony k bd wo lpgin page pr redurect krjye tu i can use cookie for that:
    // otherwise message hi thek hai...
    res.status(201).cookie("register", "successfully").json({
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