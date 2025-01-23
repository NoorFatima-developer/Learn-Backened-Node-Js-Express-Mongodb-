import { User } from "../models/user.js";

export const isAuthenticated = async(req, res, next) => {
    const { token }  = req.cookies;
    console.log(token);
        
    if(!token){
        return res.status(401).json({
                success: false,
                message: "Login First",
        })
    }
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET); 

    const user = await User.findById(decoded._id)
}