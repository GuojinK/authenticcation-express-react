import axios from "./axios"
const API = '/api/user'

export const googleLogin = async()=>{
    const result = await axios.get("http://localhost:8080/api/user/oauth2/google")
    window.location.href = result.data
}

export const getProfile = async()=>{
    const result = await axios.get(API+"/profile")
    return result
}

export const verifiedSession = async()=>{
    const result = await axios.get("http://localhost:8080/api/user/verify/session")
    return result
}