exports.isAuthenticated = (req,res,next)=>{
    if (req.session.userId) {
        next();
    } else {
        res.fail('You are not authorized to view this page',401)
    }
}