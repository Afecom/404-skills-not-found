export default function errorHandler(err, req, res, next){
    const status = err.code || 500
    const message = err.message || "Internal server error"
    
    res.status(status).json({
        status: "error",
        statusCode: status,
        message: message
    })
}