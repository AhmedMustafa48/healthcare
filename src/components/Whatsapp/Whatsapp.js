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
        <div className="outer">
            <IoLogoWhatsapp style={{color:'#25D366', fontSize:'2rem'}}/>
            {/* <h4>Contact</h4> */}
        </div>
      </a>
    </div>
  )
}