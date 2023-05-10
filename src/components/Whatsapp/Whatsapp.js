import React from 'react'
import './whatsapp.css'
import {IoLogoWhatsapp} from 'react-icons/io'
export default function Whatsapp() {
  return (
    <div>
      <a
        href="https://wa.me/+923084409056"
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* <IoLogoWhatsapp style={{color:'red'}}/> */}
        <div className="outer" style={{zIndex:'1111', height: '40px',
    width: '40px',
    position: 'fixed',
    top: '560px',
    left: '15px',
    borderRadius:'100px',
    justifyContent: 'space-around',
    backgroundColor: 'white',

    display: 'flex',
    alignItems: 'center',
    boxShadow: '0 3px 10px rgb(0 0 0 / 0.5)'
    
    }}>
            <IoLogoWhatsapp style={{color:'#25D366', fontSize:'2rem'}}/>
            {/* <h4>Contact</h4> */}
        </div>
      </a>
    </div>
  )
}