import { Paper } from '@mui/material';
import React from 'react'
import { BiInjection } from 'react-icons/bi';
import { FaHospitalAlt, FaHospitalSymbol, FaUserNurse, FaXRay } from 'react-icons/fa';
import { MdBloodtype } from 'react-icons/md';
import {useNavigate} from 'react-router-dom'
import ShortFooter from '../Footer/ShortFooter';
// import '../Services/services.css';


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

const ServiceExercpt = ({ServiceId, Titleheading, Cardcontent,cardIcon }) => {
  
    const handleSubmit = async (e) => { navigate("/allservices");}
    const navigate=useNavigate();
    const handleClickFunc =()=>{
        navigate(`/services/${ServiceId}`)
    } 
    const styles ={
      button:{
      border:'none',
      background:'transparent',
      color:'#8f8eff',
      fontWeight: 'bold',
      border:'1px solid #8f8eff',
      borderRadius:'5px',
      marginBottom: '30px',
      padding: '5px',
  },
  fontSize:{
      marginTop: '50px',
  },
  colorText:{
  
      color:'#4c4bbd',
  },
  h5:{
      color:'#8f8eff',
  },
  para:{
      fontWeight: 'normal',
      color: 'grey',
  },
  serviceBtnClr:{
      borderRadius:'25px',
      backgroundColor:'#4c4bbd',
      color:'white',
      padding:'10px',
      width: '9rem',
      
  },
  oneCol:{
      width: '19rem',
      height: '16rem',
  },
  para:{
      fontSize: '0.8rem',
  }}
  return (


                                    <div>
    <div style={{ fontSize: '3rem', color: '#4c4bbd' }}  key={ServiceId} >


    </div>
  
    {/* <div>{cardIcon}</div> */}
    
    <h5 className="colorText">{Titleheading}</h5>
    <div className="what">
    
    <p className={styles.para}>{Cardcontent}</p>
    </div>
    <div className="text-center">

    <button onClick={handleClickFunc} >Read More...</button></div>
    
</div>



        
  )
}

export default ServiceExercpt
