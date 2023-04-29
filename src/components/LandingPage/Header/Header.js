import React from 'react';
import './header.css';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';

const Header = () => {
  return (
    <div className="headline d-flex justify-content-between" id="home">
      <div>
       <h5 className='h-float'>Home Nursing Services</h5>
        
      </div>
      <div className='p-disappear'>
        <p> We provide all health services at your doorstep...24/7</p>
      </div>
    </div>
  )
}

export default Header
