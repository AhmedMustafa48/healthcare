import React from 'react'
import './allservices.css';
import NavBar from "../LandingPage/LandingNav/NavBar"
import { Paper } from '@mui/material';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import {BsHospital} from "react-icons/bs";
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import MedicationLiquidIcon from '@mui/icons-material/MedicationLiquid';
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
import {BiInjection, BiPlusMedical} from 'react-icons/bi'
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import AcUnitIcon from '@mui/icons-material/AcUnit';

import {MdBloodtype} from "react-icons/md"
import {FaUserNurse, FaFileMedical,FaXRay, FaFillDrip, FaHandHoldingMedical, FaPumpMedical, FaClinicMedical, FaFileMedicalAlt} from "react-icons/fa"
import {GiBandageRoll} from 'react-icons/gi'
import {RiTestTubeFill, RiSurgicalMaskFill} from 'react-icons/ri'
import HealingIcon from '@mui/icons-material/Healing';
import {HiDocumentReport} from 'react-icons/hi'
import {TiWaves} from 'react-icons/ti'
import {SlSpeech} from 'react-icons/sl'
import {MdSpeakerNotes} from 'react-icons/md'
import {BsBagPlusFill}  from 'react-icons/bs'
import {TbChartDonutFilled} from 'react-icons/tb'


import { Link, useNavigate } from 'react-router-dom';


const data=[
    {
        icon:<BloodtypeIcon/>,
        heading:"BLOOD SAMPLING SERVICES",
        content:"No one enjoys a blood test, but a visit to the phlebotomist is often necessary if you want to find out what wrong...",
    },
    {
        icon:<FaUserNurse/>,
        heading:"Nursing Staff at home",
        content:"Home Nursing Care is for patients and Elders to take care of at home, even after Covid-19, Surgical Patients,  Cancer or any other....",
    },
    {
        icon:<MedicationLiquidIcon/>,
        heading:"Physiotherapy At Home",
        content:"people are working on the right things at the right time. Easily document requirements,specs, directly or via files...",
    },
    {
        icon:<FaXRay/>,
        heading:"X RAY'S AT HOME",
        content:"Instead of waiting at an emergency room to be examined, many patients are now opting to have X-rays taken in their homes.",
    },
    {
        icon:<BiInjection/>,
        heading:"ANTIBIOTICS INJECTIONS",
        content:"Antibiotics are a group of medicines that are used to treat infections caused by some germs (bacteria and certain parasites).",
    },
    {
        icon:<FaFillDrip/>,
        heading:"DRIPS/IV FLUID",
        content:"An IV fluid drip involves a small tube called a catheter and a saline-based electrolyte solution that contains your selected...",
    },
    {
        icon:<MedicalServicesIcon/>,
        heading:"CANNULA/BRANNULA",
        content:"A cannula is a thin tube that doctors insert into a person’s body cavity, such as their nose, or into a vein. Doctors use them to drain fluid, administer..",
    },
    {
        icon:<GiBandageRoll/>,
        heading:"DRESSING AT HOME",
        content:"Place the gauze pads or packing tape in your wound. Carefully fill in the wound and any spaces under the skin.",
    },
    {
        icon:<RiTestTubeFill/>,
        heading:"N/G TUBE",
        content:"A nasogastric tube (NG tube) is a special tube that carries food and medicine to the stomach through the nose.",
    },
    {
        icon:<MedicationLiquidIcon/>,
        heading:"FOLLY'S CATHERIZATION",
        content:"A Foley catheter is a thin, sterile tube inserted into the bladder to drain urine.",
    },
    {
        icon:<HealingIcon/>,
        heading:"STITCHES REMOVE",
        content:"Healthcare professional use stitches to heal deep cuts and wounds. Many people wonder if it is...",
    },
    {
        icon:<AcUnitIcon/>,
        heading:"DOXYGEN CYLINDER/OXYGEN CONCENTRATOR",
        content:"These are primarily used in hospitals where...",
    },
    {
        icon:<HiDocumentReport/>,
        heading:"ECG AT HOME,",
        content:"With our ECG monitoring device, you can record medical grade ECG anytime, anywhere..",
    },
    {
        icon:<TiWaves/>,
        heading:"ULTRASOUND AT HOME",
        content:"Home ultrasound is the provision of therapeutic ultrasound via the use of a portable...",
    },
    {
        icon:<TbChartDonutFilled/>,
        heading:"NUTRITIONIST SERVICES",
        content:"he Horizen Healthy Care nutrition, much like the concept of health care, stems from...",
    },
    {
        icon:<FaFileMedical/>,
        heading:"ECHOCARDIOGRAPHY AT HOME",
        content:"Our parental echocardiogram (also called a tele parental echo) empowers you to perform an echocardiogram on your child from home",
    },
    {
        icon:<BiPlusMedical/>,
        heading:"PROVIDES MEDICAL EQUIPMENT AT HOME",
        content:"Medical Equipment Services is an independent service company that specializes in the repair, calibration and preventative maintenance...",
    },
    {
        icon:<FaPumpMedical/>,
        heading:"ANNULA/BRANNULA<",
        content:"A cannula is a thin tube that doctors insert into a person’s body cavity, such as their nose, or into a vein. Doctors use them to drain fluid, administer medication, or provide oxygen...",
    },
    {
        icon:<FaHandHoldingMedical/>,
        heading:"VACCINATIONS AT HOME<",
        content:"We provide our clients with a system to better help them identify which vaccines an employee has received, when they may need boosters and what expiration dates may exist.",
    },
    {
        icon:<FaClinicMedical/>,
        heading:"HIJAMA(CUPPING THERAPY)AT HOME",
        content:"حجامہ سنت بھی علاج بھی” It is narrated that:Cupping(Hijama)is most helpful procedure for Human being to cure...",
    },
    {
        icon:<FaFileMedical/>,
        heading:"MASSAGE THERAPY AT HOME",
        content:"Therapeutic massage has several names such as restorative massage, medical massage, healing massage or corrective massage. This type of massage helps in...",
    },
    {
        icon:<RiSurgicalMaskFill/>,
        heading:"CLOSTOMY BAG CHANGE AT HOME",
        content:"Stoma Bag Change Checklist Ensure you have everything to hand before changing your bag: A clean stoma bag Scissors and template (if required) Dry wipes or plain kitchen roll (not cotton wool or tissues) Warm...",
    },
    {
        icon:<MdSpeakerNotes/>,
        heading:"SPEECH THERAPY SERVICES",
        content:"EAt-home speech therapy can be especially helpful for kids who aren’t easily frustrated and who have only mild delays or articulation errors, said Massachusetts-based pediatric speech therapist Alyssa Gusenoff. More serious problems, like speech regressions...",
    },
]

const MyAllServices = (ServiceId) => {
    const navigate = useNavigate();
    // const handleSubmitReadMore = async (e) => { 
    // navigate("/readmore");

   
// }
const handleClickFunc=()=>{
    navigate(`/services/${ServiceId}`)
} 
  return (
    <div>
      <div className="container">
      <section className="allservicesSection">
            <div id="allservices" className="pt---60 contianer">
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
                            <div className="one-row row-appear" style={{
                                width: "100%",
                                display: "flex",
                                flexWrap: "wrap",
                                justifyContent: "space-around",
                                }}>

                                {data.map((item, i) => (
                                    <div className="one-col col-4">
                                        <div style={{ fontSize: '3rem', color: '#4c4bbd' }}>{item.icon}</div>
                                        <h5>{item.heading}</h5>
                                        {/* <p>{item.content}</p> */}
                                        <p>{item.content}</p>
                                        <button onClick={handleClickFunc}>Read More...</button>
                                    </div>
                                )) }    


                            </div>
                            
                        </div>
                    </Paper>
                </div>
            </div>
        </section>
      </div>
    </div>
  )
}

export default MyAllServices