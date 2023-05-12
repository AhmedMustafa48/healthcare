import './App.css';
import LandingNavbar from "../src/components/LandingPage/LandingNav/NavBar";
import Header from "./components/LandingPage/Header/Header";
import Home from './components/Home/Home';
// import MultiActionAreaCard from './components/Services/card';
import ResponsiveGrid from './components/Services/card';
import Benefits from './components/Services/card';
import Footer from './components/Footer/Footer';

import { BrowserRouter, BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";
import MyAllServices from './components/AllServices/MyAllServices';
import ReadMore from './components/ReadMore/ReadMore';
import LandingPage from './components/LandingPage/LandingPage';
import MyCards from './components/Services/card';
import ServiceDetail from './components/Services/ServiceDetail';

function App() {
  return (
    // <div className="App">
    <>
      <div><Header /></div>
     

      <div
        data-bs-spy="scroll"
        data-bs-target="#navbar-example2"
        data-bs-offset="0"
        className="scrollspy-example"
        tabIndex="0"
      >
        {/* <Router> */}
          <Routes>
            <Route exact path="/" element={<LandingPage/>} />
            <Route path="/allservices" element={<MyAllServices />} /> 

            <Route path="/readmore" element={<ReadMore/>} />
            <Route path="/services" element={<MyCards/>}/>
              {/* <MyCards/>
            </Route> */}

            <Route path="/services/:ServiceId" element={<ServiceDetail/>}/>
              
            
          </Routes>
        

      </div>
      {/* <MyAllServices/> */}
      <footer>
        <Footer />
      </footer>
        {/* <Routes>
          <Route path="/myallservices" element={<MyAllServices />} />
        </Routes> */}
      
    </>
  );
}

export default App;
