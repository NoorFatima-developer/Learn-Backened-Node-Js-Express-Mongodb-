// ab hum banayegy class errorhandler ki...(ye class islye banae hai ta kai aghr mai eror mai msg k sath statisCode b dena chahon tu mai wo b deskon...)

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
    err.statusCode = err.statusCode || 500;

     return res.status(404)
    .json({
        success: false, 
        message: err.message,
    })
}


export default ErrorHandler;