import { useEffect, useState } from 'react'
import './App.css'
import UserRegistration from './components/UserRegistration'
import UserLogin from './components/UserLogin'
import userContext from './context/userContext'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Logout from './components/logout'
import profileContext from './context/ProfileContext'
import axios from 'axios'


function App() {
  const [count, setCount] = useState(0)
  const [login ,setlogin] = useState(false)
  const [userProfileData, setUserProfileData] = useState();
    useEffect(()=>
    {

    },[])
  

  return (
    <>
    
     <h1>This is outside of the routes</h1>
       

    <userContext.Provider value={{islogin:login, setislogin:setlogin}}>
      <profileContext.Provider value =
       {{userProfileData : userProfileData , setUserProfileData : setUserProfileData}}>
      </profileContext.Provider>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/logout' element={<Logout></Logout>}></Route>
      </Routes>
    </userContext.Provider>
    {/* <UserRegistration></UserRegistration> */}
    {/* <UserLogin></UserLogin> */}
     </>
  )
}

export default App
