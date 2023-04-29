import React from 'react'
import './services.css'
import SchemaIcon from '@mui/icons-material/Schema';
import FlagIcon from '@mui/icons-material/Flag';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
import ConstructionIcon from '@mui/icons-material/Construction';
import AlignHorizontalLeftIcon from '@mui/icons-material/AlignHorizontalLeft';
import { Paper } from '@mui/material';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import MedicationLiquidIcon from '@mui/icons-material/MedicationLiquid';
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
import {BsHospital} from "react-icons/bs";
import {MdBloodtype} from "react-icons/md"
import {BiInjection} from "react-icons/bi"
import {FaUserNurse, FaXRay} from "react-icons/fa"
import bloodsample from '../../Assets/bloodsample.jpeg';
import { Link } from 'react-router-dom';
import MyAllServices from '../AllServices/MyAllServices';
import ReadMore from '../ReadMore/ReadMore';
import { useNavigate } from "react-router-dom";
import anti from '../../Assets/ReadMorePics/antibiotics.png'





const navigation = [
    
    {
      heading: "BLOOD SAMPLING SERVICES",
      content: "Home Nursing Care is for patients and Elders to take care of at home, even after Covid-19, Surgical Patients, Cancer or any other disease or Corona vaccination",
      image: anti
    }
  ];

const MyCards = () => {
    const navigate = useNavigate();
    const handleSubmit = async (e) => { navigate("/allservices");}
    const handleSubmitReadMore = async (e) => { navigate("/readmore");}
    return (
        <section className="benefitSection">
            <div id="services" className="pt---60 contianer">
                <div className="benDiv">
                    <div className="text-center mb-5">
                        <h3 className="fontSize">
                            <span className="colorText">Services</span>
                        </h3>
                        <div className='what'>
                        <h5>What Service We Provide?</h5>
                        <p>We provide professional qualified skilled staff at your home anywhere in Lahore. Our highly trusted and qualified male and female staff for home nursing care.</p>
                        
                        </div>
                    </div>

                    {/* <div className="paper"> */}
                    <Paper
                        className="main-cardss"
                        elevation={10}
                        sx={{ borderRadius: "20px", width: '97%', margin: '15px', padding: '3px' }}
                    >
                        <div className="ben-div">
                            <div className="one-row row-appear">
                            
                            {navigation.map((item, i) => (

                                <div className="one-col" key={i}>
                                    <MdBloodtype style={{ fontSize: '3rem', color: '#4c4bbd' }} />
                                    <h5>{item.heading}</h5>
                                    {/* <p>{item.content}</p> */}
                                    <p>No one enjoys a blood test, but a visit to the phlebotomist is often necessary </p>
                                    <button onClick={handleSubmitReadMore}>Read More...</button>
                                </div>
                               
                               )) }

                                <div className="one-col">
                                    <FaUserNurse style={{ fontSize: '3rem', color: '#4c4bbd' }} />
                                    <h5>Nursing Staff at home</h5>
                                    <p>Home Nursing Care is for patients and Elders to take care of at home, even after  Covid-19...</p>
                                    <button>Read More...</button>
                                </div>

                                <div className="one-col">
                                    <MedicationLiquidIcon sx={{ fontSize: '3rem', color: '#4c4bbd' }} />
                                    <h5>Physiotherapy At Home</h5>
                                    <p>people are working on the right things at the right time. Easily document requirements...</p>
                                    <button>Read More...</button>
                                </div>


                            </div>
                            <div className="one-row row-disappear">
                                <div className="one-col">
                                    <MedicationLiquidIcon sx={{ fontSize: '3rem', color: '#4c4bbd' }} />
                                    <h5>Doctor Visit At Home</h5>
                                    <p>people are working on the right things at the right time. Easily document requirements,specs, directly or via files.</p>
                                    <button>Read More...</button>
                                </div>

                                <div className="one-col">
                                    <FaXRay style={{ fontSize: '3rem', color: '#4c4bbd' }} />
                                    <h5>X-rays at home</h5>
                                    <p>Easily post comments and concerns and easily communicate with external stakeholders.</p>
                                    <button>Read More...</button>
                                </div>
                                <div className="one-col">
                                    <BiInjection style={{ fontSize: '3rem', color: '#4c4bbd' }} />
                                    <h5>Antibiotics Injections</h5>
                                    <p>Easily post comments and concerns and easily <br />communicate with external stakeholders.</p>
                                    <button>Read More...</button>
                                </div>
                            </div>
                            
                            <div className="text-center">
                            {/* <Link to="/myallservices">    */}
                            {/* <a href='allservices'> */}
                                <button className='service-btn-clr' onClick={handleSubmit}>All Services</button>
                                {/* </a> */}
                                {/* </Link>    */}
                            </div>
                            
                        </div>
                    </Paper>
                </div>
            </div>
        </section>
    )
}

export default MyCards
