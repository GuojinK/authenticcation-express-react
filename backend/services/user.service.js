
const AuthError = require("../common/error/AuthError")
const UserExistError = require("../common/error/UserExistError")
const userDB = require("../db/user.db")
const bcrypt = require("bcrypt")

exports.register = async(data)=>{
    const {email,password,username} = data
    const passwordHash = await bcrypt.hash(password.toString(),10)
    try{
        const result = await userDB.createUser({email,password:passwordHash,username})
        return result
    }catch (error){
        throw new UserExistError("Email was taken")
    }
}

exports.login = async(data)=>{
    const {email,password} = data
    try{
        const user = await userDB.findUserByEmail(email)
        const matched = await bcrypt.compareSync(password.toString(),user.password)
        if(!matched) throw new AuthError("Email/ Password is incorrect")
        return user
    }catch(err){
        throw(err)
    }

}
