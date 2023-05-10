import React from 'react'
// import { Link } from 'react-router-dom';
import "./nav.css";
import complogo from '../../../Assets/complogo.png';
const LandingNavbar = () => {
  return (
    <div>
      <nav id="navbar-example2" className="navbar navbar-expand-lg">
        <div className="container">
          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-evenly" 
            id="navbarNav"
          >
            <ul className="navbar-nav ml-auto">
<div className='bunch'>
            
            <a href="#home"> 
              <img className='respLogo' width="100px" src={complogo} alt="logo" />  
            </a>
            

            
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#services">
                  Services
                </a>
              </li>

              

              

              <li className="nav-item">
                <a className="nav-link" href="#aboutus">
                  About Us
                </a>
              </li>
              
              <li className="nav-item">
                <a className="nav-link" href="#contactus">
                  Contact Us
                </a>
              </li>
</div>
              {/* <li className="nav-item">
                <a className="nav-link" href="#scrollspyHeading4">
                  Contact Us
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default LandingNavbar