import React from 'react'
import './btmslider.css'

import {FaUserNurse} from "react-icons/fa"
import {IoIosPeople} from 'react-icons/io'
import {BiHomeHeart} from 'react-icons/bi'
import {AiOutlineFileProtect} from 'react-icons/ai'
const BtmSlider = () => {
    const styles = {
        ap:{
            color: 'whitesmoke',
            border:'2px solid red'
        },
        purpcol:{
            backgroundColor: '#4c4bbd',
                                    borderRadius: '25px',
                                    width: '15rem',
                                    height: '10rem',
                                    padding: '10px 50px 10px 50px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    marginBottom:'10px',

                                    // '@media screen and (max-width:800px)':{
                                       
                                    //       marginLeft:'auto',
                                    //         marginRight:'auto',
                                    // } 

        },
        purpcolpara:{
            fontSize: '1rem',
            fontEeight: 'normal',
            textAlign: 'center', 
            color: 'white', 
        },
        purpcolhead:{
            color: 'white',
            fontSize: '15pt',
        },
        rowdisplay :{
            display: 'flex',
            justifyContent: 'space-around',

                                width: "100%",
                                display: "flex",
                                flexWrap: "wrap",
                                justifyContent: "space-around",

            // '@media screen and (max-width:800px)':{
                
            //     backgroundColor: '#4c4bbd',
            //     display: 'block',
            //     border: '10px',
            
            //   },
        },
 

        '@media screen and (max-width:800px)':{
            purpcol:{
              marginLeft:'auto',
                marginRight:'auto',
                marginBottom:'10px',
            },
            rowdisplay:{
                backgroundColor: '#4c4bbd',
                display:'block',
                border: '10px',
            }
            
        
          }
      };
    return (
        <section className="About Us">
            <div id="aboutus" className="pt---60">
                <div className="benDiv">
                    

                    {/* <div className="paper"> */}
                    



                    <div className="ben-div">
                            <div className="a-row this-row-appear" style={styles.rowdisplay}>
                                <div className="purp-col this-row-block" style={styles.purpcol}>
                                    <IoIosPeople style={{ fontSize: '3rem', color: 'white' ,marginBottom:'5' }} />
                                    <h5 className='ah' style={styles.purpcolhead}>35 +</h5>
                                    <p className='ap' style={styles.purpcolpara}>Happy Patients</p>
                                </div>

                                <div className="purp-col this-row-block" style={styles.purpcol}>
                                    <BiHomeHeart style={{ fontSize: '3rem', color: 'white' ,marginBottom:'5'}} />
                                    <h5 className='ah' style={styles.purpcolhead}>41 +</h5>
                                    <p className='ap' style={styles.purpcolpara}>Successfully Home Care</p>
                                </div>

                                <div className="purp-col this-row-block" style={styles.purpcol}>
                                    <AiOutlineFileProtect style={{ fontSize: '3rem', color: 'white' ,marginBottom:'5'}} />
                                    <h5 className='ah' style={styles.purpcolhead}>5 +</h5>
                                    <p className='ap' style={styles.purpcolpara}>Years of Experience</p>
                                </div>

                                <div className="purp-col this-row-block" style={styles.purpcol}>
                                    <FaUserNurse style={{ fontSize: '3rem', color: 'white' ,marginBottom:'5'}} />
                                    <h5 className='ah' style={styles.purpcolhead}>30 +</h5>
                                    <p className='ap' style={styles.purpcolpara}>Professional Nurses</p>
                                </div>


                            </div>
                            
                        </div>

                </div>
            </div>
        </section>
    )
}

export default BtmSlider