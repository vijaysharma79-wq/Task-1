import React, { useState } from 'react'
import './nabar.css'
import { NavLink } from 'react-router-dom'
import "firebase/compat/auth"
import firebase from "firebase/compat/app"
import { useSelector } from 'react-redux'
import { selectUser } from '../userSlice'

const Navbar = () => {
  const user=  useSelector(selectUser)
  console.log(user)
 
  return (
    

       <>
      
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  <a className="site-nav_logo w-nav-brand" aria-label="home"><img src="https://assets-global.website-files.com/636dd759d71287e8ac7e6280/643439bd94363f4d30f385c1_Primary%20Logo%20-%20Black.svg" loading="lazy" alt="" height={"30px"} className="logo-img"/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          
      <NavLink to="/Home" className="nav-link " >for student
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/Employers" className="nav-link">for  employers</NavLink>
        </li>
        
      </ul>
      <div>
      <NavLink to="/Login">
      <button type="button" className="btn btn-dark">Signin</button>
      </NavLink>
      <NavLink to="/Home" >

      <button type="button" className="btn btn-dark"  onClick={e=>firebase.auth().signOut()}>Logout</button> 
      </NavLink>

      </div>
   
    </div>
  </div>
</nav>
  
       </>
        

    
  )
}

export default Navbar