const userService = require("../services/user.service")
exports.register = async (req,res,next)=>{
    try{
        const {email,password,username} = req.body
        await userService.register({email,password,username})
        res.success("Successfully registed")
    }catch(err){
        next(err)
    }
}
exports.login = async (req,res,next)=>{
    try{
        const {email,password} = req.body
        const user = await userService.login({email,password})
        req.session.userId = user.id
        res.success(null,"Successfully logged in")
    }catch(err){
        next(err)
    }

}
exports.profile = async(req,res,next)=>{
    const userId = req.session.userId
    const data = await userService.getUserProfile(userId)
    res.success("",data)
}

exports.genGoogleUrl = async(req,res,next)=>{
    const authorizeUrl = userService.createGoogleUrl()
    res.success("URL Generated",authorizeUrl)
}
exports.googleOAuth2 = async(req,res,next)=>{
    const code = req.query.code
    try{
        const data = await userService.registerGoogleUser(code)
        req.session.userId = data
        res.redirect("http://localhost:3000")
    }catch(err){
        next(err)
    }   
}

exports.verifySession = async(req,res,next)=>{
    if(req.session.userId) res.success("Session verified",true)
}
