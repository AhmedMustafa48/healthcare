import React from 'react'
import './herobottom.css'
import { Paper } from '@mui/material';
import MedicationLiquidIcon from '@mui/icons-material/MedicationLiquid';
import {MdBloodtype} from "react-icons/md"
import {FaUserNurse} from "react-icons/fa"
import {FaMedal} from "react-icons/fa"
import {RiNurseFill} from "react-icons/ri"
import {MdPriceChange} from "react-icons/md"
// import bloodsample from '../../Assets/bloodsample.jpeg';
// import { Link } from 'react-router-dom';

const HeroBottom = () => {
    return (
        <section>
            <div className="pt---60 contianer">
                <div className="benDiv">
                    {/* <div className="text-center mb-5">
                        <h3 className="fontSize">
                            <span className="colorText">Services</span>
                        </h3>
                        <div className='what'>
                        <h5>What Service We Provide?</h5>
                        <p>We provide professional qualified skilled staff at your home anywhere in Lahore. Our highly trusted and qualified male and female staff for home nursing care.</p>
                        
                        </div>
                    </div> */}

                    {/* <div className="paper"> */}
                    {/* <Paper
                        className="main-cardss this-paper"
                        elevation={10}
                        sx={{ borderRadius: "20px", width: '97%', margin: '15px', padding: '3px' }}
                    > */}
                        <div className="ben-div this-div">
                            <div className="one-row row-appear">
                                <div className="one-col this-col para">
                                    <FaMedal style={{ fontSize: '3rem', fontColor: 'white' }} />
                                    <h5 style={{color: 'rgb(213, 205, 205)'}}>Satisfaction Guarantee</h5>
                                    <p style={{color: 'rgb(213, 205, 205)', fontSize:'1rem'}}>satisfaction with home health nursing as assessed by the Client Satisfaction Survey ... "Quality assurance is the promise or guarantee</p>
                                </div>

                                <div className="one-col this-col">
                                    <RiNurseFill style={{ fontSize: '3rem', color: 'white' }} />
                                    <h5 style={{color: 'rgb(213, 205, 205)'}}>Professional Nurse</h5>
                                    <p style={{color: 'rgb(213, 205, 205)', fontSize:'1rem'}}>As the nation's largest healthcare profession, registered nurses ... But as a nursing quality, caring makes all the difference to patients</p>
                                </div>

                                <div className="one-col this-col">
                                    <MdPriceChange style={{ fontSize: '3rem', color: 'white' }} />
                                    <h5 style={{color: 'rgb(213, 205, 205)'}}>Low Cost Service</h5>
                                    <p style={{color: 'rgb(213, 205, 205)', fontSize:'1rem'}}>We are an agency that provides affordable non-medical assistance at home at the highest quality possible.</p>
                                </div>


                            </div>
                        </div>
                    {/* </Paper> */}
                </div>
            </div>
        </section>
    )
}

export default HeroBottom