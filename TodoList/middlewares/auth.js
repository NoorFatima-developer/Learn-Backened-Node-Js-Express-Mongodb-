export const isAuthenticated = (req, res, next) => {
        const { token }  = req.cookies;
        console.log(token);
        
        if(!token){
            return res.status(401).json({
                success: false,
                message: "Login First",
            })
        }
    
        const decoded = jwt.verify(token, process.env.JWT_SECRET); 
}