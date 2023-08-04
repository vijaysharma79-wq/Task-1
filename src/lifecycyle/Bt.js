import React from 'react'
import './employe.css'

const Bt= ({filtes,setdata,datas}) => {
  
  return (
    <div className='bt-main'>
    <header>
        <h2>Employer Hiring App</h2>
    </header>
    <main>
        <section className="job-listings">
            {/* <!-- Sample Job Listing --> */}
            <div className="job-listing">
                <h2>devloper</h2>
                <p>top hire</p>
                <p>Location</p>
                <button className="btn btn-dark">Apply Now</button>
            </div>
            {/* <!-- Add more job listings here --> */}
        </section>
        <section className="candidate-input">
            <h2>Enter Candidate Details</h2>
            <form id="candidate-form">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required/>
                
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required/>
                
                <label for="phone">Phone:</label>
                <input type="tel" id="phone" name="phone" required/>
                
                <label for="resume">Resume:</label>
                <input type="file" id="resume" name="resume" accept=".pdf,.doc,.docx" required/>
                
                <button  className="btn btn-dark"type="submit">Submit</button>
            </form>
        </section>
    </main>
    <footer>
        <p>&copy; 2023 Your Company</p>
    </footer>


    </div>
  )
}

export default Bt;