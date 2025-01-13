import React , {userContext, useEffect, useRef, useContext} from 'react'
import profileContext from '../context/ProfileContext'
import logout from './logout';

export default function UserProfile()
{
    let profileData = useContext(profileContext)
    let userNameRef = useRef("");
    let emailRef = useRef("");
    let contactRef = useRef("");

    useEffect(()=>
    {
        let u = profileData.userProfileData[0];
        userNameRef.current.value = u.username;
        emailRef.current.value = u.email;
        contactRef.current.value = u.contact;
    },[])

    return (
        <>

        <div className="grid grid-cols-2">
            <div>
            <div>UserProfile</div>
            <p>
                username : <input type="text" ref={userNameRef} classname = 'textbox'/>
            </p>
 
           <p>
            email : <input type = "text" disabled
            className='textbox' ref={emailRef}/>
           </p>

           <p>
            contact : <input type = "text" className='textbox' ref = {contactRef}/>
           </p>

        <input type='button' value = "Save" className='btn'/>
        </div>

    <div>
        <Logout></Logout>
    </div>
    </div>

        </>
    )
}