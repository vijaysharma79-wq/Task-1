import React, { useState } from 'react'
import "./login.css"
import { auth } from './Firebas'
import { NavLink } from 'react-router-dom'
import { loginuser } from '../userSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const dispatch=useDispatch()
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const history =useNavigate()

    const [password,setPassword]=useState("")
    
    const register=(e)=>{
e.preventDefault()

if(!name){
    return alert('name is required')
}
if(!email){
    return alert('email is required')
}
if(!password){
    return alert ('password is required')
}
if(password.length<8){
    return alert('password must be 8 character')
}
auth.createUserWithEmailAndPassword(email,password).then((userAuth)=>{
history.push('/Hiring')

    userAuth.user.updateProfile({
      displayName:name,
    }).then(()=>{
      dispatch(loginuser({
        email:userAuth.user.email,
        uid:userAuth.user.uid,
        displayName:name
      }))
    })
  }).catch(error=>console.log(error))
  setName("")
  setEmail("")
  setPassword("")


    }

  return (
    <div className='login_screen'>
        <img src="https://assets-global.website-files.com/636dd759d71287e8ac7e6280/643439bd94363f4d30f385c1_Primary%20Logo%20-%20Black.svg" loading="lazy" alt="" height={"30px"} className="logo-img"/>
        <h1>We are hiring for front end developer</h1>
        <form onSubmit={register}>
            <input type="text" placeholder="full name" value={name} onChange={e=>setName(e.target.value)}></input>
            <input type="email" placeholder="email" value={email}  onChange={e=>setEmail(e.target.value)}></input>
            <input type="password" placeholder="password" value={password} onChange={e=>
                setPassword(e.target.value)}></input>
            <input type="submit" ></input>
           <NavLink to="/Signin"  className="nav-link" >
            <h4>Already a register ?<span>Login here</span></h4>
            </NavLink>


        </form>
    </div>
  )
}

export default Login