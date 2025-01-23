import jwt from 'jsonwebtoken';

export const sendCookie = (user, res, statusCode = 200, message) => {

    const token = jwt.sign({_id:user._id}, process.env.JWT_SECRET)

    res.status(statusCode).cookie("token", token, {
        httpOnly: true,
        maxAge: 15 * 60 * 1000,
        sameSite: "lax", // CORS issues se bachne ke liye
        secure: process.env.NODE_ENV === "production", // Secure tabhi hoga jab production mode me ho
    }).json({
        success: true,
        message,
    })
}

