import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
import { auth } from "./firebase";
import './Login.css';

function Login() {
  const [name , setName] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault()
    auth.signInWithEmailAndPassword(email, password).then((useraAuth) => {
          dispatch(login(
            {
              email: useraAuth.email,
              uid: useraAuth.uid,
              displayName: useraAuth.displayName
            }
          ))

    }).catch((error) => alert(error.message))
   
  }
  const register = (e) => {
    if(!name){
      return alert('Please enter your full name')
    }
    auth.createUserWithEmailAndPassword(email, password).then ((useraAuth) => {
      console.log(useraAuth)
          dispatch(login({
              email: useraAuth.user.email,
              uid: useraAuth.user.uid,
              displayName: useraAuth.user.displayName
          }))
    }).catch((error) =>alert(error))

  }
  

  return (
    <div className='login_container'>
      <img src='https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo.png' alt='' />
        <form>
            <input value={name} onChange={(e) => setName(e.target.value)} type='text' placeholder='Full Name Required if registering' />
            <input value={profilePic} onChange={(e) => setProfilePic(e.target.value)} type='text' placeholder='Profile Pic (Optional)' />
            <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email' />
            <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' />
            <button className="signin_button" onClick={loginToApp} >Sign In</button>
        </form>
      <p>Not a member? <span className='register_option' onClick={register}>Register Now.</span></p>
    </div>


  )
}

export default Login;