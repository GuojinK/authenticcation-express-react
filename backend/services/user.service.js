
const AuthError = require("../common/error/AuthError")
const UserExistError = require("../common/error/UserExistError")
const GoogleOAuth2Client = require("../common/oauth2/google.oauth2.client")
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

exports.createGoogleUrl = ()=>{
    const authorizeUrl = GoogleOAuth2Client.generateAuthUrl({
        access_type:'offline',
        scope:'https://www.googleapis.com/auth/userinfo.email profile openid',
        prompt: 'consent'
    })
    return authorizeUrl
}

exports.registerGoogleUser = async(code)=>{
    const result = await GoogleOAuth2Client.getToken(code);
    await GoogleOAuth2Client.setCredentials(result.tokens);
    const googleInfo = GoogleOAuth2Client.credentials;
    // Gather google user info
    const response = await fetch(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${googleInfo.access_token}`)
    const data = await response.json()
    const email = data.email
    const username  = data.given_name
    // Register if user not exist 
    let user = await userDB.findUserByEmail(email)
    if(!user) user = await userDB.createOAuthUser({email,username,oauth2Provider:"google"})
    return user.id
}

exports.getUserProfile = async(data)=>{
    const profile = await userDB.findUserById(data)
    return profile
}