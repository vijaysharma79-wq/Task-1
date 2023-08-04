import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Home.css'
import { useSelector } from 'react-redux'
import { selectUser } from '../userSlice'



const Home = () => {

  // const datay=(mm)=>{
  //   const mys=my.filter((ob)=>{
  //     return ob.name===mm
  //   })
  //   setmy(mys)
  //   console.log(my)
  // }
  // console.log(my)
  const user=  useSelector(selectUser)
  return (
    <div className='main-c'>
    {/* { <button onClick={()=>datay("vijay")}>hfdjgbfr</button>} */}
    {/* { <button onClick={()=>datay("sanjay")}>hfdjgbfr</button>} */}

        <div className='heading-1'>
            <h1>Find Your Next tech job in 1 week.</h1>
        </div>
        <div className='paragraph'>
          <h3> are you a top 2% softwere engineer, product manager or data scientist ?</h3>
                <h4>et leading technlogy companies complete to hire you.</h4>
        
        </div>
        <div className='btn-apply'>
          {/* {! user?<NavLink to="/Login" className="nav-link " >:<NavLink to="/hiring">:</NavLink><button> apply to join</button> </NavLink>} */}
            {user?<NavLink to="/Hiring" className="nav-link" ><button className='btn btn-success'>apply to join</button></NavLink>:<NavLink to="/Login"  className="nav-link"> <button  className='btn btn-success'>apply to join </button></NavLink>}
        </div>
        <div className=' items-a'>
          <div className='items-1'>
        <img className="" src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/feature_icon_2.png" data-src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/feature_icon_2.png" height="60" width="60" alt="Service"/>
        <h3>Step-1:complete profile</h3>
        <span> once you are  approved,we showcase you to top leading technology</span>
        </div>
        <div className='items-1'><img class="icon-2" src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/icon1.png" data-src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/icon1.png" height="60" width="60" alt="Service"/>
        <h3>Step-2:recieve job offers</h3>
        <span> once you are  approved,we showcase you to top leading technology</span>
        </div>
        <div className='items-1'>
        <img class="icon-3" src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/icon2.png" data-src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/icon2.png" height="60" width="60" alt="Service"/>
        <h3>Step-3:get a dream job</h3>
        <span> once you are  approved,we showcase you to top leading technology</span>
        </div>
        </div>

    </div>
  )
}

export default Home