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

    // jb hum simply cookie token sy data id mai bejty thy tu we save in a user
    // yahan pr we will save in a "req.user"
    const user = await User.findById(decoded._id);
    // and isk bd next ko call krdea,,,and next kea hai wo m routes mai user.js mai dekh skti o..
    next();
}