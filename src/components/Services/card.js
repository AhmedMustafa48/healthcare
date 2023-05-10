import React from 'react'
import './services.css'
import SchemaIcon from '@mui/icons-material/Schema';
import FlagIcon from '@mui/icons-material/Flag';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
import ConstructionIcon from '@mui/icons-material/Construction';
import AlignHorizontalLeftIcon from '@mui/icons-material/AlignHorizontalLeft';
import { Button, Paper } from '@mui/material';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import MedicationLiquidIcon from '@mui/icons-material/MedicationLiquid';
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
import {BsHospital} from "react-icons/bs";
import {MdBloodtype} from "react-icons/md"
import {BiInjection} from "react-icons/bi"
import {FaUserNurse, FaXRay, FaHospitalAlt, FaHospitalSymbol} from "react-icons/fa"
import { Link } from 'react-router-dom';
import MyAllServices from '../AllServices/MyAllServices';
import ReadMore from '../ReadMore/ReadMore';
import { useNavigate } from "react-router-dom";
import anti from '../../Assets/ReadMorePics/antibiotics.png'
import ServiceData from '../ReadMore/ServiceData.json';
import ServiceExercpt from '../ReadMore/ServiceExercpt';
// import {makeStyles} from "mui/styles"

//   const navigation = [
    
//     { id:1,
//         icon:<MdBloodtype/>,
//       heading: "BLOOD SAMPLING SERVICES",
//       content: "Home Nursing Care is for patients and Elders to take care of at home, even after Covid-19, Surgical Patients, Cancer or any other disease or Corona vaccination",
//       image: anti, 
//     },
//     { 
//         icon:<FaUserNurse/>,
//         heading: "Nursing Staff at home",
//         content: "Home Nursing Care is for patients and Elders to take care of at home, even after  Covid-19...",
//         image: anti, 
//       },
//     {
//         icon:<FaHospitalSymbol/>,
//         heading:"Physiotherapy At Home",
//         content: "People are working on the right things at the right time. Easily document requirements...",
//         image: anti, 
//     },

//     {
//         icon:<FaHospitalAlt/>,
//         heading:"Doctor Visit At Home",
//         content: "people are working on the right things at the right time. Easily document requirements,specs, directly or via files.",
//         image: anti, 
//     },
//     {
//         icon:<FaXRay/>,
//         heading:"X-rays At Home",
//         content: "Easily post comments and concerns and easily communicate with external stakeholders.",
//         image: anti, 
//     },
//     {
//         icon:<BiInjection/>,
//         heading:"Antibiotics injection",
//         content: "Easily post comments and concerns and easily <br />communicate with external stakeholders.",
//         image: anti, 
//     },

    

//   ];

const MyCards = () => {
    // const classes = useStyles()
    const services=ServiceData.map((service)=>(
       
    <div className="one-col col-4">

    
    <ServiceExercpt ServiceId={service.id}
        Titleheading={service.Titleheading}
        Cardcontent={service.Cardcontent}
        heading={service.heading} content={service.content}></ServiceExercpt>
        </div>
       ))
    
    return (
        <section className="benefitSection">
              <div id="services" className="pt---60 contianer">
        <div>
       
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

                    <Paper
                        className="main-cardss"
                        elevation={10}
                        sx={{ borderRadius: "20px", width: '97%', margin: '15px', padding: '3px' }}
                    >
                        
                        <div className="ben-div" >
                            <div className="one-row row-appear" style={{
                                width: "100%",
                                display: "flex",
                                flexWrap: "wrap",
                                justifyContent: "space-around",
                                }}>
                           

                             
                            {services}
                           
                            </div></div>
                            
                    </Paper>
                </div>
        
        </div>
                
            
            </div>
        
        </section>
    )
}

export default MyCards
