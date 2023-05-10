import React from 'react'
import { useParams } from 'react-router'
import ServiceData from '../ReadMore/ServiceData.json'
import sample from '../../Assets/ReadMorePics/cannula.png'
import { Box } from '@mui/material'
import '../ReadMore/readmore.css'
const ServiceDetail = () => {
    const {ServiceId} =useParams();
    const service =ServiceData.find((s)=>s.id===Number(ServiceId))
    if (!service){
        return(
            <div>Loading</div>
        )
    }

  return (
   <div className='container'>
            <h2 className='heading'>
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
  )
}

export default ServiceDetail
