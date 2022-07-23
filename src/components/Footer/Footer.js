import React from 'react'
import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {
  return (
    <div style={{background:'#3090c7'}}>
     <div className="container">
      <div className="row ">
        <div className="col-4 col-sm-3 mt-5 text-white">
          <h1>Footer</h1>
        </div>
        <div className="col-3 col-sm-6 mt-5"></div>
        <div className="col-5 col-sm-3 mt-5">
          <div className="container">
            <div className="icons">
              <FacebookIcon className='ms-2'/>
              <TwitterIcon  className='ms-2'/>
              <InstagramIcon  className='ms-2'/>
              <LinkedInIcon  className='ms-2'/>

            </div>
          </div>
        </div>
      </div>
     </div>
     <div className="container text-white">
      <div className="row">
      <div className="col-md-3 ">
        <div className="header mt-3 mb-3">
          <h4>RESOURCES</h4>
        </div>
       
        <div className="footer-text" >
          <h6>Application</h6>
          <h6>Documantation</h6>
          <h6>Promotion</h6>
          <h6>FAQ</h6>
         

        </div>  
      </div>
      <div className="col-md-3 ">
      <div className="header mt-3 mb-3">
          <h4>PRICING</h4>
        </div>
        <div className="footer-text">
          <h6>Overview</h6>
          <h6>Premium Plans</h6>
          <h6>Free Plans</h6>
          <h6>Affiliate Programme</h6>
         

        </div>  
      </div>
      <div className="col-md-3 ">
      <div className="header mt-3 mb-3">
          <h4>COMPANY</h4>
        </div>
        <div className="footer-text">
          <h6>About Us</h6>
          <h6>Blog</h6>
          <h6>Partnership</h6>
          <h6>Careers</h6>
         

        </div>  
      </div>
      <div className="col-md-3 ">
      <div className="header mt-3 mb-3">
          <h4>SOCIAL</h4>
        </div>
        <div className="footer-text">
          <h6>Facebook</h6>
          <h6>Twitter</h6>
          <h6>Instagram</h6>
          <h6>LinkedIn</h6>
         

        </div>  
      </div>
      </div>
     </div>
       
      <div className="copyright text-center text-white mt-5">
      <CopyrightIcon/> All Right Reserved By Mohammad Nazim Hossain
      </div>
    </div>
  )
}

export default Footer

