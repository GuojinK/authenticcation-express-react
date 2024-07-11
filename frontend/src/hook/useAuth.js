import { createContext, useState,useContext ,useEffect} from "react";
import { verifiedSession } from "../api/UserAPI";

const AuthContext = createContext(null)


export const AuthProvider = ({children})=>{
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
       const verifyUser = async()=>{
        const res = await verifiedSession()
        if(res){
            setIsLoggedIn(true)
        }
       }

       verifyUser()
    }, [])
    

    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        {children}
        </AuthContext.Provider>
    );
}
export const useAuth = () => useContext(AuthContext);
