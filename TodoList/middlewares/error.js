export const errorMiddleware = (err, req, res, next) => {
    console.log(err.message);
    
     return res.status(404)
    .json({
        success: false, 
        message: err.message
    })
}
