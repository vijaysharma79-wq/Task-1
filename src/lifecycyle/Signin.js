import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { auth } from './Firebas'
import { Dispatch } from 'react'
import { loginuser } from '../userSlice'
import { useDispatch } from 'react-redux'
import { useNavigate} from 'react-router-dom'
const Signin = () => {
 const dispatch=   useDispatch()
    const [email,setEmail]=useState("")
const history =useNavigate()
    const [password,setPassword]=useState("")
    
    const signIn=(e)=>{
        e.preventDefault()
        if(!email){
          return alert("mail is required")
        }  if(!password){
          return alert("password is required")
        }
        auth.signInWithEmailAndPassword(email,password).then(({user})=>{
          console.log(user)
          history('/Hiring')

          dispatch(loginuser({
            email:user.email,
            uid:user.uid,
            
          }))
        }).catch(error=>alert(error))
      }
   
  return (
    <div>

<div className='login_screen'>
        <img src="https://assets-global.website-files.com/636dd759d71287e8ac7e6280/643439bd94363f4d30f385c1_Primary%20Logo%20-%20Black.svg" loading="lazy" alt="" height={"30px"} className="logo-img"/>
        <h1>We are hiring for front end developer</h1>
        <form onSubmit={signIn}>
            <input type="email" placeholder="email" value={email}  onChange={e=>setEmail(e.target.value)}></input>
            <input type="password" placeholder="password" value={password} onChange={e=>
                setPassword(e.target.value)}></input>
            <input type="submit" ></input>
           <NavLink to="/Login " className="nav-link" >
            <h4 >not a member?<span>register here</span></h4>
            </NavLink>

        </form>
    </div>

    </div>
  )
}

export default Signin