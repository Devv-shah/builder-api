import React from 'react'
import React, {useEffect, useState} from 'react'
import { useContext } from 'react'
import userContext from '../context/userContext'
import AgentBuilderHome from './agentBuilder/AgentBuilderHome'
import Login from './Login'
import Logout from './logout'
import UserProfile from './UserProfile'

export default function Home() 
{
  let user = useContext(userContext)
  const [UI, setUI] = useState(<UserProfile></UserProfile>)

  useEffect(()=> 
  {
    if(user.userType === "Agent/Builder")
    {
      setUI(<UserProfile></UserProfile>)
    }
    else 
    {
      setUI(<UserProfile></UserProfile>)
    }
    console.log(user.userType)
  },[userType]
)
return (
  <>
    {user.islogin ? <UserProfile></UserProfile> : <login></login>}
    {user.islogin ? UI : <Login></Login>}
  </>
)
}