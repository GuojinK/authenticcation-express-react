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