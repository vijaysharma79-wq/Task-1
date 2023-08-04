import { useEffect, useState } from "react";
import Navbar from "./lifecycyle/Navbar";
import Login from "./lifecycyle/Login";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Hiring from "./lifecycyle/Hiring";
import Bt from "./lifecycyle/Bt";
import Main from "./lifecycyle/Main";
import { useDispatch, useSelector } from "react-redux";
import { loginuser, logoutuser, selectUser } from "./userSlice";
import Signin from "./lifecycyle/Signin";
import Home from './lifecycyle/Home'
import Employers from "./lifecycyle/Employers";
import { auth } from "./lifecycyle/Firebas";
import  "firebase/compat/firestore"

function App() {
const user=useSelector(selectUser)

const dispatch=useDispatch()
const [data,setdata]=useState(Main)


// console.log(data)

useEffect(()=>{
auth.onAuthStateChanged((userAuth)=>{
  if(userAuth){
dispatch(loginuser({
  email:userAuth.email,
  uid:userAuth.uid,
}))
  }
  else{
dispatch(logoutuser())
  }
})
},[])

const filtes=(dl)=>{

const my =Main.filter((fil)=>{
return fil.post.includes(dl) }
)
setdata(my)

}

  return (
   <>
<Router>
<Navbar/>

{/* <Deails/> */}
<Routes>
 <Route path="/Employers" element={<Employers/>}/>
 <Route path="/Bt" element={<Bt/>}/>
  <Route path="/Home" element={<Home />}/>
   <Route path="/Login" element={<Login/>}/>
  <Route path="/Signin" element={<Signin/>}></Route>
  {<Route path="/Hiring" element={<Hiring  data={data} setdata={setdata} filtes={filtes} Main={Main}/>}/>}
</Routes>
</Router> 
   </>
  );
}

export default App;
