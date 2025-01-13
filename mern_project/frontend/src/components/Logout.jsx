import React, { useContext } from 'react'
import userContext from '../context/userContext'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
export default function Logout() {
  const navigate = useNavigate()
  
  let user = useContext(userContext)
  useEffect(()=>{
    navigate("/")
  },[])

  return (
    <input type="button " value="logout"  className='bg-red-500'
    onClick={()=>user.setislogin(false)}/>
  )
}