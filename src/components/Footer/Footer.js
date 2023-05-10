import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import './footer.css'

export default function Footer() {
  return (
    <div className="bgColor" style={{ backgroundColor:"#4c4bbd"}} id="contactus">
        
    <MDBFooter bgColor='#5E35B1' className='text-center text-lg-start text-muted'>
      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4 left'>
              <h6 className='text-uppercase fw-bold mb-4'style={{color:'rgb(213, 205, 205)'}}>
                <MDBIcon icon="gem" className="me-3" style={{color:'rgb(213, 205, 205)'}}/>
                Home nursing services
              </h6>
              <p style={{color:'rgb(213, 205, 205)', fontWeight:'normal'}}>
              Each day thousands of individuals enter the entryways of Horizen health care & home nursing services with somebody near to them in require of therapeutic attention…
              </p>
              <hr style={{color:'rgb(213, 205, 205)'}}/> 
              <p  style={{color:'rgb(213, 205, 205)'}}>
                {/* <MDBIcon icon="envelope" className="me-3" />
                 */}
                 <AccessTimeIcon className="me-2"/>
                 Monday-Sunday (24/7)
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4' style={{color:"rgb(213, 205, 205)"}}>
              <h6 className='text-uppercase fw-bold mb-4'>Quick Links</h6>
              <p>
                <a href='#home' className='text-reset' style={{textDecoration:"none"}}>
                  Home
                </a>
              </p>
              <p>
                <a href='#services' className='text-reset' style={{textDecoration:"none"}}>
                  Service
                </a>
              </p>
              
              
              <p>
                <a href='#aboutus' className='text-reset' style={{textDecoration:"none"}}>
                  About us
                </a>
              </p>
              <p>
                <a href='#contactus' className='text-reset' style={{textDecoration:"none"}}>
                  Contact us
                </a>
              </p>
            </MDBCol>

            {/* <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4' style={{color:'white'}}>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'  style={{textDecoration:"none"}}>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'  style={{textDecoration:"none"}}>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset' style={{textDecoration:"none"}}>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset' style={{textDecoration:"none"}}>
                  Help
                </a>
              </p>
            </MDBCol> */}

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4' style={{color:'rgb(213, 205, 205)'}}>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                {/* <MDBIcon icon={LocationOnIcon} className="me-2" /> */}
                <LocationOnIcon className="me-2"/>
                Home Nursing Services, Doctor Hospital, Lahore.
              </p>
              <p>
                {/* <MDBIcon icon="envelope" className="me-3" />
                 */}
                 <EmailIcon className="me-2"/>
                 kamrankamrannurse@gmail.com
              </p>
              <p>
                <LocalPhoneIcon className="me-2"/>+92 3034393501
                {/* <MDBIcon icon="phone" className="me-3" />  */}
              </p>
              <p>
                {/* <MDBIcon icon="print" className="me-3" />  */}
                <WhatsAppIcon className="me-2"/>+92 3084409056 
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)', color:'rgb(213, 205, 205)'}}>
        © 2023 Copyright:
        {/* <a className='text-reset fw-bold' href='https://mdbootstrap.com/'> */}
          Home Nursing Services
        {/* </a> */}
      </div>
    </MDBFooter>
    </div>
  );
}