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


import { Link } from 'react-router-dom';

const MyAllServices = () => {
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
                            <div className="one-row row-appear">
                                <div className="one-col">
                                    <MdBloodtype style={{ fontSize: '3rem', color: '#4c4bbd' }} />
                                    <h5>BLOOD SAMPLING SERVICES</h5>
                                    <p>No one enjoys a blood test, but a visit to the <br />
                                    phlebotomist is often necessary if you want to <br />
                                    find out what’s wrong...</p>
                                    {/* <p>Keep work and goals organized in one place.<br />
                                    Be able to easily plan projects while taking <br />
                                    previous track record into account.</p> */}
                                    <button>Read More...</button>
                                </div>

                                <div className="one-col">
                                    <FaUserNurse style={{ fontSize: '3rem', color: '#4c4bbd' }} />
                                    <h5>Nursing Staff at home</h5>
                                    <p>Home Nursing Care is for patients and Elders to take care of at home, even after Covid-19, Surgical Patients,  Cancer or any other...</p>
                                    <button>Read More...</button>
                                </div>

                                <div className="one-col">
                                    <MedicationLiquidIcon sx={{ fontSize: '3rem', color: '#4c4bbd' }} />
                                    <h5>Physiotherapy At Home</h5>
                                    <p>people are working on the right things at the<br /> right time. Easily document requirements, <br />specs, directly or via files.</p>
                                    <button>Read More...</button>
                                </div>


                            </div>
                            <div className="one-row row-appear">
                                <div className="one-col">
                                    <FaXRay style={{ fontSize: '3rem', color: '#4c4bbd' }} />
                                    <h5>X RAY'S AT HOME</h5>
                                    <p>Instead of waiting at an emergency room to be examined, many patients are now opting to have X-rays taken in their homes.</p>
                                    <button>Read More...</button>
                                </div>

                                <div className="one-col">
                                    <BiInjection style={{ fontSize: '3rem', color: '#4c4bbd' }} />
                                    <h5>ANTIBIOTICS INJECTIONS</h5>
                                    <p>Antibiotics are a group of medicines that are used to treat infections caused by some germs (bacteria and certain parasites).</p>
                                    <button>Read More...</button>
                                </div>
                                <div className="one-col">
                                    <FaFillDrip style={{ fontSize: '3rem', color: '#4c4bbd' }} />
                                    <h5>DRIPS/IV FLUID</h5>
                                    <p>An IV fluid drip involves a small tube called a catheter and a saline-based electrolyte solution that contains your selected...</p>
                                    <button>Read More...</button>
                                </div>
                            </div>

                            <div className="one-row row-appear">
                                <div className="one-col">
                                    <MedicalServicesIcon sx={{ fontSize: '3rem', color: '#4c4bbd' }} />
                                    <h5>PCANNULA/BRANNULA</h5>
                                    <p>A cannula is a thin tube that doctors insert into a person’s body cavity, such as their nose, or into a vein. Doctors use them to drain fluid, administer</p>
                                    <button>Read More...</button>
                                </div>

                                <div className="one-col">
                                    <GiBandageRoll style={{ fontSize: '3rem', color: '#4c4bbd' }} />
                                    <h5>DRESSING AT HOME</h5>
                                    <p>Place the gauze pads or packing tape in your wound. Carefully fill in the wound and any spaces under the skin.</p>
                                    <button>Read More...</button>
                                </div>
                                <div className="one-col">
                                    <RiTestTubeFill style={{ fontSize: '3rem', color: '#4c4bbd' }} />
                                    <h5>N/G TUBE</h5>
                                    <p>A nasogastric tube (NG tube) is a special tube that carries food and medicine to the stomach through the nose.</p>
                                    <button>Read More...</button>
                                </div>
                            </div>
                            <div className="one-row row-appear">
                                <div className="one-col">
                                    <MedicationLiquidIcon sx={{ fontSize: '3rem', color: '#4c4bbd' }} />
                                    <h5>FOLLY'S CATHERIZATION</h5>
                                    <p>A Foley catheter is a thin, sterile tube inserted into the bladder to drain urine.
</p>
                                    <button>Read More...</button>
                                </div>

                                <div className="one-col ">
                                    <HealingIcon sx={{ fontSize: '3rem', color: '#4c4bbd' }} />
                                    <h5>STITCHES REMOVE</h5>
                                    <p>Healthcare professional use stitches to heal deep cuts and wounds. Many people wonder if it is...</p>
                                    <button>Read More...</button>
                                </div>
                                <div className="one-col">
                                    <AcUnitIcon sx={{ fontSize: '3rem', color: '#4c4bbd' }} />
                                    <h5>DOXYGEN CYLINDER/OXYGEN CONCENTRATOR</h5>
                                    <p>These are primarily used in hospitals where...</p>
                                    <button>Read More...</button>
                                </div>
                            </div>
                            <div className="one-row row-appear">
                                <div className="one-col">
                                    <HiDocumentReport style={{ fontSize: '3rem', color: '#4c4bbd' }} />
                                    <h5>ECG AT HOME,</h5>
                                    <p>With our ECG monitoring device, you can record medical grade ECG anytime, anywhere….</p>
                                    <button>Read More...</button>
                                </div>

                                <div className="one-col">
                                    <TiWaves style={{ fontSize: '3rem', color: '#4c4bbd' }} />
                                    <h5>ULTRASOUND AT HOME</h5>
                                    <p>Home ultrasound is the provision of therapeutic ultrasound via the use of a portable...</p>
                                    <button>Read More...</button>
                                </div>
                                <div className="one-col">
                                    <TbChartDonutFilled style={{ fontSize: '3rem', color: '#4c4bbd' }} />
                                    <h5>NUTRITIONIST SERVICES</h5>
                                    <p>The Horizen Healthy Care nutrition, much like the concept of health care, stems from...</p>
                                    <button>Read More...</button>
                                </div>
                            </div>

                            <div className="one-row row-appear">
                                <div className="one-col">
                                    <FaFileMedicalAlt style={{ fontSize: '3rem', color: '#4c4bbd' }} />
                                    <h5>ECHOCARDIOGRAPHY AT HOME</h5>
                                    <p>Our parental echocardiogram (also called a tele parental echo) empowers you to perform an echocardiogram on your child from home</p>
                                    <button>Read More...</button>
                                </div>

                                <div className="one-col">
                                    <BiPlusMedical style={{ fontSize: '3rem', color: '#4c4bbd' }} />
                                    <h5>PROVIDES MEDICAL EQUIPMENT AT HOME</h5>
                                    <p>Medical Equipment Services is an independent service company that specializes in the repair, calibration and preventative maintenance...</p>
                                    <button>Read More...</button>
                                </div>
                                <div className="one-col">
                                    <FaPumpMedical style={{ fontSize: '3rem', color: '#4c4bbd' }} />
                                    <h5>CANNULA/BRANNULA</h5>
                                    <p>A cannula is a thin tube that doctors insert into a person’s body cavity, such as their nose, or into a vein. Doctors use them to drain fluid, administer medication, or provide oxygen...</p>
                                    <button>Read More...</button>
                                </div>
                            </div>

                            <div className="one-row row-appear">
                                <div className="one-col">
                                    <FaHandHoldingMedical style={{ fontSize: '3rem', color: '#4c4bbd' }} />
                                    <h5>VACCINATIONS AT HOME</h5>
                                    <p>We provide our clients with a system to better help them identify which vaccines an employee has received, when they may need boosters and what expiration dates may exist.</p>
                                    <button>Read More...</button>
                                </div>

                                <div className="one-col">
                                    <FaClinicMedical style={{ fontSize: '3rem', color: '#4c4bbd' }} />
                                    <h5>HIJAMA(CUPPING THERAPY)AT HOME</h5>
                                    <p>“حجامہ سنت بھی علاج بھی” It is narrated that:Cupping(Hijama)is most helpful procedure for Human being to cure...</p>
                                    <button>Read More...</button>
                                </div>
                                <div className="one-col">
                                    <FaFileMedical style={{ fontSize: '3rem', color: '#4c4bbd' }} />
                                    <h5>MASSAGE THERAPY AT HOME</h5>
                                    <p>Therapeutic massage has several names such as restorative massage, medical massage, healing massage or corrective massage. This type of massage helps in...</p>
                                    <button>Read More...</button>
                                </div>
                            </div>

                            <div className="one-row row-appear">
                                <div className="one-col">
                                    <RiSurgicalMaskFill style={{ fontSize: '6rem', color: '#4c4bbd' }} />
                                    <h5>CLOSTOMY BAG CHANGE AT HOME</h5>
                                    <p>Stoma Bag Change Checklist Ensure you have everything to hand before changing your bag: A clean stoma bag Scissors and template (if required) Dry wipes or plain kitchen roll (not cotton wool or tissues) Warm...</p>
                                    <button>Read More...</button>
                                </div>

                                <div className="one-col">
                                    <MdSpeakerNotes style={{ fontSize: '3rem', color: '#4c4bbd' }} />
                                    <h5>SPEECH THERAPY SERVICES</h5>
                                    <p>EAt-home speech therapy can be especially helpful for kids who aren’t easily frustrated and who have only mild delays or articulation errors, said Massachusetts-based pediatric speech therapist Alyssa Gusenoff. More serious problems, like speech regressions...</p>
                                    <button>Read More...</button>
                                </div>
                               
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