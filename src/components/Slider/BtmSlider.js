import React from 'react'
import './btmslider.css'
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
import {FaUserNurse, FaXRay} from "react-icons/fa"
// import bloodsample from '../../Assets/bloodsample.jpeg';
import { Link } from 'react-router-dom';
import {IoIosPeople} from 'react-icons/io'
import {BiHomeHeart} from 'react-icons/bi'
import {AiOutlineFileProtect} from 'react-icons/ai'
const BtmSlider = () => {
    return (
        <section className="About Us">
            <div id="aboutus" className="pt---60">
                <div className="benDiv">
                    

                    {/* <div className="paper"> */}
                    



                    <div className="ben-div">
                            <div className="a-row this-row-appear">
                                <div className="a-col this-row-block">
                                    <IoIosPeople style={{ fontSize: '3rem', color: 'white' ,marginBottom:'5' }} />
                                    <h5 className='ah'>35 +</h5>
                                    <p className='ap'>Happy Patients</p>
                                </div>

                                <div className="a-col this-row-block">
                                    <BiHomeHeart style={{ fontSize: '3rem', color: 'white' ,marginBottom:'5'}} />
                                    <h5 className='ah'>41 +</h5>
                                    <p className='ap'>Successfully Home Care</p>
                                </div>

                                <div className="a-col this-row-block">
                                    <AiOutlineFileProtect style={{ fontSize: '3rem', color: 'white' ,marginBottom:'5'}} />
                                    <h5 className='ah'>5 +</h5>
                                    <p className='ap'>Years of Experience</p>
                                </div>

                                <div className="a-col this-row-block">
                                    <FaUserNurse style={{ fontSize: '3rem', color: 'white' ,marginBottom:'5'}} />
                                    <h5 className='ah'>30 +</h5>
                                    <p className='ap'>Professional Nurses</p>
                                </div>


                            </div>
                            
                        </div>

                </div>
            </div>
        </section>
    )
}

export default BtmSlider