import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../LandingPage/Header/Header'
import LandingNavbar from '../LandingPage/LandingNav/NavBar'
import MyAllServices from './MyAllServices'

const WrapAllSer = () => {
  return (
    <div>
      <div><Header /></div>
      <div>
        <LandingNavbar />
      </div>

      <div
        data-bs-spy="scroll"
        data-bs-target="#navbar-example2"
        data-bs-offset="0"
        className="scrollspy-example"
        tabIndex="0"
      >
        {/* <Router>
          <Routes>
            <Route exact path="/home" element={<Home />} />
            <Route path="/allservices" element={<MyAllServices />} /> 
            
          </Routes>
        </Router> */}
          
    <Router>
        <Routes>
            <Route path="/allservices" element={<MyAllServices/>} />
        </Routes>
    </Router>
        


      </div>
      {/* <MyAllServices/> */}
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default WrapAllSer
