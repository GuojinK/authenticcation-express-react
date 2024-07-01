const responseHandler = (req,res,next)=>{
    res.success = function (msg,data,statusCode=200){
        res.status(statusCode).json({
            msg:msg,
            data:data,
            statusCode: statusCode
        })
    }

    res.fail = function (msg,statusCode){
        res.status(statusCode).json({
            msg:msg,
            statusCode:statusCode
        })
    }
    next()
}

module.exports = responseHandler