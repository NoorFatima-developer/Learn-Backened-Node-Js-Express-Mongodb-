// ab hum banayegy class errorhandler ki...(ye class islye banae hai ta kai aghr mai eror mai msg k sath statisCode b dena chahon tu mai wo b deskon...)

class ErrorHandler extends Error{
    constructor(message, statusCode){
        // super parent class ka constructor hota hai..
        super(message)
        this.statusCode = statusCode
    }
}

// res.status wala jo h false or err.message wala ye hr file m use hora tha
// islye meny code ko clean krdea or error wahan call krk  code yahan likh dea 
// lkin m class sy krlogi tu or short o jyega islye meny oper errorhandler use krlea...
// Error mai basically mai 1 chez add kr pari thie isleye meny errorHandler krlea hai ta k mai status code b add kr pao...
export const errorMiddleware = (err, req, res, next) => {
    console.log(err.message);
    
    err.message = err.message || "Internal Server Error";
    err.statusCode = err.statusCode || 500;

     return res.status(err.statusCode)
    .json({
        success: false, 
        message: err.message,
    })
}

export default ErrorHandler;