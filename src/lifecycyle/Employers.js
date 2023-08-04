import React from 'react'
import './Home.css'
import { useSelector } from 'react-redux'
import { selectUser } from '../userSlice'
import { NavLink } from 'react-router-dom'
const Employers = () => {
  const user=  useSelector(selectUser)
  console.log(user)
  return (
    <div className='main-c'>
    <div className='heading-1'>
        <h1>Hire Top talented web devloper and Datascientist</h1>
    </div>
    <div className='paragraph'>
      <h3> Seeking creative designers to join our team,bringing inovatives ,</h3>
      <h4>includesas to life and shapping and creative user experincess </h4>
    </div>
    <div className='btn-apply'>
    {user?<NavLink to="/Bt" className="nav-link" >
    <button  className='btn btn-success'>start hiring </button> </NavLink>:<NavLink to="/Login"  className="nav-link"> <button  className='btn btn-success'> start hiring</button>r</NavLink>}
    </div>
    <div className=' items-a'>
      <div className='items-1'>
    <img className="" src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/feature_icon_2.png" data-src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/feature_icon_2.png" height="60" width="60" alt="Service"/>
    <h3>Step-1:Acess curated candidate</h3>
    <span> once you are  approved,we showcase you to top leading technology</span>
    </div>
    <div className='items-1'><img class="icon-2" src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/icon1.png" data-src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/icon1.png" height="60" width="60" alt="Service"/>
    <h3>Step-1:complete profile</h3>
    <span> once you are  approved,we showcase you to top leading technology</span>
    </div>
    <div className='items-1'>
    <img class="icon-3" src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/icon2.png" data-src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/icon2.png" height="60" width="60" alt="Service"/>
    <h3>Step-3:pay only if you hire</h3>
    <span> once you are  approved,we showcase you to top leading technology</span>
    </div>
    </div>

</div>
  )
}

export default Employers