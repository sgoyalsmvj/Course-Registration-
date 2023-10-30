import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ProfilePage = () => {
  const [user, setUser] = useState();
  useEffect(()=>{
    axios.get('/http://localhost:3000/profile').then((resp)=>{
        setUser(resp.data);
    })
  },[]);
   
  return (
    <div>
        
    </div>
  )
}

export default ProfilePage