import React from 'react'
import './herobelow.css'
import {FaMedal} from "react-icons/fa"
import {RiNurseFill} from "react-icons/ri"
import {MdPriceChange} from "react-icons/md"

const HeroBelow = () => {
    return (
        <>
            <div className="pt---60">
                {/* <div className="benDiv"> */}
                
                        <div className="background" style={{backgroundColor: '#4c4bbd'}}>
                            <div className="one-row row-appear">
                                <div className="one-col this-col para">
                                    <FaMedal style={{ fontSize: '3rem', color: 'white' }} />
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
                {/* </div> */}
            </div>
        </>
    )
}

export default HeroBelow