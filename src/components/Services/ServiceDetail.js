import React from 'react'
import { useNavigate, useParams } from 'react-router'
import ServiceData from '../ReadMore/ServiceData.json'
import sample from '../../Assets/ReadMorePics/cannula.png'
import { Box, Button } from '@mui/material'
import '../ReadMore/readmore.css'
import ShortFooter from '../Footer/ShortFooter'
import {BiArrowBack} from 'react-icons/bi' 
const ServiceDetail = () => {
    const navigate=useNavigate();
    const back =async(e)=>{navigate('/')}
    const {ServiceId} =useParams();
    const service =ServiceData.find((s)=>s.id===Number(ServiceId))
    if (!service){
        return(
            <div>Loading</div>
        )
    }

  return (
    
    <>
   <div className='container'>
    <Button onClick={back} variant="text" sx={{color:"#4c4bbd", fontSize:'1rem'}}><BiArrowBack/>Back</Button>
            <h2 className='heading displayChange'>
                {/* {props.heading} */}
                {/* helloworld */}
                {
                    `${service.headings}`
                }
                </h2>
            <div className="flex displayChange">
                <div>
                    {/* {props.content} */}
                    <p className='content'>
                        {
                            `${service.content}`
                        }
                    </p>
                    </div> 
                <div className='rowImage'>
                    {/* <img className='thisImg' src={props.img} /> */}
                    {/* `${service.img}` */}
                
                    {/* <img alt='sample' src={service.link} height={service.height}/> */}
                    <Box
                    component="img"
                    src={service.link}
                    height="30%"
                    className='thisImg'
                    >

                    </Box>
                    
                </div>

            </div>
            
        </div>
        <ShortFooter/>
        </>
  )
}

export default ServiceDetail
