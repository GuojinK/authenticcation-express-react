const responseHandler = (req,res,next)=>{
    res.success = function (data,message,statusCode=200){
        res.status(statusCode).json({
            data:data,
            message:message,
            statusCode: statusCode
        })
    }

    res.fail = function (message,statusCode){
        res.status(statusCode).json({
            message:message,
        })
    }
    next()
}

module.exports = responseHandler