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

exports.findUserByEmail = async(email)=>{
    const user = await prisma.user.findUnique({
        where:{ email }
    })
    return user
}


exports.findUserById = async(id)=>{
    const user = await prisma.user.findUnique({
        where:{ id }
    })
    return user
}