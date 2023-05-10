import React from 'react'
import { useParams } from 'react-router'
import ServiceData from '../ReadMore/ServiceData.json'

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
                    `service ${service.headings}`
                }
                </h2>
            <div className="flex">
                <div>
                    {/* {props.content} */}
                    <p className='content'>
                        {
                            `service ${service.content}`
                        }
                    </p>
                    </div> 
                {/* <div className='rowImage'>
                    <img className='thisImg' src={props.img} />
                </div> */}
            </div>
        </div>
  )
}

export default ServiceDetail
