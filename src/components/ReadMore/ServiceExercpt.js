import { Paper } from '@mui/material';
import React from 'react'
import { BiInjection } from 'react-icons/bi';
import { FaHospitalAlt, FaHospitalSymbol, FaUserNurse, FaXRay } from 'react-icons/fa';
import { MdBloodtype } from 'react-icons/md';
import {useNavigate} from 'react-router-dom'


const navigation = [
    
        { id:1,
            icon:<MdBloodtype/>,
          heading: "BLOOD SAMPLING SERVICES",
          content: "Home Nursing Care is for patients and Elders to take care of at home, even after Covid-19, Surgical Patients, Cancer or any other disease or Corona vaccination",
        },
        { 
            icon:<FaUserNurse/>,
            heading: "Nursing Staff at home",
            content: "Home Nursing Care is for patients and Elders to take care of at home, even after  Covid-19...",
            
          },
        {
            icon:<FaHospitalSymbol/>,
            heading:"Physiotherapy At Home",
            content: "People are working on the right things at the right time. Easily document requirements...",
            
        },
    
        {
            icon:<FaHospitalAlt/>,
            heading:"Doctor Visit At Home",
            content: "people are working on the right things at the right time. Easily document requirements,specs, directly or via files.",
           
        },
        {
            icon:<FaXRay/>,
            heading:"X-rays At Home",
            content: "Easily post comments and concerns and easily communicate with external stakeholders.",
            
        },
        {
            icon:<BiInjection/>,
            heading:"Antibiotics injection",
            content: "Easily post comments and concerns and easily <br />communicate with external stakeholders.",
             
        },
    
        
    
      ];

const ServiceExercpt = ({ServiceId, Titleheading, Cardcontent }) => {
    const handleSubmit = async (e) => { navigate("/allservices");}
    const navigate=useNavigate();
    const handleClickFunc =()=>{
        navigate(`/services/${ServiceId}`)
    } 
  return (


                                    <div>
    <div style={{ fontSize: '3rem', color: '#4c4bbd' }}  key={ServiceId} >


    </div>
  
    <h5>{Titleheading}</h5>
    <p>{Cardcontent}</p>
    <div className="text-center">

    <button onClick={handleClickFunc} >Read More...</button></div>
</div>



        
  )
}

export default ServiceExercpt
