import React, { useEffect, useState } from 'react'
import './hire.css'
const Hiring = ({data,setdata,filtes,Main}) => {
   

 console.log(data)

        return (
            
            <div ><div className='filter-bt'>
<div className=' drop-down'>
<button type="button" className="btn btn-dark" onClick={()=>filtes("datascience")}>Datascientist</button>
<button type="button" className="btn btn-dark"  onClick={()=>filtes("pythondevloper")}> Python developer</button>
<button type="button" className="btn btn-dark"  onClick={()=>filtes("fullstack")}>Fullstack</button>
<button type="button" className="btn btn-dark"  onClick={()=>filtes("sales")}>sales</button>
<button type="button" className="btn btn-dark"  onClick={()=>(setdata(Main))}>remote</button>


    </div>
               
                </div>
                {data.map((datas)=>{return  <div className='main-type'key={datas.id} >
<div  className='main-type1' key={datas.id}>
<h2>{datas.Company}</h2>
<p>{datas.post}</p>
</div>
<div className="main-type2">
   <div className='main-job'>
    <h2>{datas.post}</h2> 
<button type="button" className="btn btn-dark">Apply</button>

   </div>
    <div className='options1'>
        <p>{datas.location} </p>
        <p>{datas.worktype}</p>
        <p>{datas.type}</p>
        <p>{datas.jobtype}</p>
    </div>
</div>
</div>
                })}
               
            </div>
          )
    
 
}

export default Hiring