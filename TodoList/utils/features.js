import jwt from 'jsonwebtoken';

export const sendCookie = (user, res, statusCode = 200, message) => {

    const token = jwt.sign({_id:user._id}, process.env.JWT_SECRET)

    res.status(statusCode).cookie("token", token, {
        httpOnly: true,
        maxAge: 15 * 60 * 1000,
    }).json({
        success: true,
        message,
        // by default lax hota hai cookie islye postman mai work krta hai but m chahti o jb front end 
        // ko backend sy attack krna ho tb sameSite: none ho and secure: true ho na k lax.. 
        // so do this:
        sameSite: process.env.NODE_ENV === "Development" ? "lax" : "none",
        secure: process.env.NODE_ENV === "Development" ? false : true,
    })
}

