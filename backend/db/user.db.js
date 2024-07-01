const prisma = require('./prisma.instance')

exports.createUser= async(data)=>{
    const {email,password,username} = data
    await prisma.user.create({
        data:{
            username: username,
            email: email,
            password: password
        }
    })
}

exports.createOAuthUser = async(data)=>{
    const {email,username,oauthProvider} = data
    const user =  await prisma.user.upsert({
        where:{email:email},
        update:{},
        create:{
            username: username,
            oauth2Provider: oauthProvider,
            email: email
        },
        select:{
            id:true
        }
    })
    return user
}

exports.findUserByEmail = async(email)=>{
    const user = await prisma.user.findUnique({
        where:{ email }
    })
    return user
}

exports.findUserById = async(id)=>{
    const user = await prisma.user.findUnique({
        where:{ id },
        select:{
            email:true,
            username:true
        }
    })
    return user
}