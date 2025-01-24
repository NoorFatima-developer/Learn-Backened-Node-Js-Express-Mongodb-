// ab hum banayegy class errorhandler ki...

class ErrorHandler extends Error{
    constructor(message, statusCode){
        // super parent class ka constructor hota hai..
        super(message)
        this.statusCode = statusCode
    }
}

export const errorMiddleware = (err, req, res, next) => {
    console.log(err.message);
    
    err.message = err.message || "Internal Server Error";
     return res.status(404)
    .json({
        success: false, 
        message: err.message,
    })
}


export default ErrorHandler;