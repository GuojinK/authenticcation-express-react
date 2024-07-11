import React, { useState,useEffect } from 'react'
import { getProfile } from '../api/UserAPI'

export default function Profile() {
    const [profile,setProfile] = useState(null)
    const [loading,setLoading]= useState(true)
    
    useEffect(() => {
        getProfile().then((res)=>{
            setProfile(res.data)
            setLoading(false)
        })
    

    }, [])
    
    
  return (
    <div>
        {loading? 
            <div>loading</div>
            :
            <div>
                {profile.email}
                {profile.username}
            </div>
        }

    </div>
  )
}
