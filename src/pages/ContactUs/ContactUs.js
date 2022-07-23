import React from 'react'
import './ContactUs.css'
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const ContactUs = () => {
  return (
    <div className='image-div'>
        <div className="text text-center text-white ">
        <h1 className='text-white text-center pb-1' style={{paddingTop:'100px',fontWeight:'bold',}} >GET IN TOUCH</h1>
        <p> <PhoneIcon/>Phone: +1458565454</p>
        <h6><EmailIcon/> Email: <span style={{color:'red'}}>hello@gmail.com</span> </h6>
        <h6><LocationOnIcon/> Address: Mohammadpur 18 street Dhaka, Bangladesh </h6>

        </div>
        <div className="container">
            <div className="row " style={{marginTop:'140px'}}>
                <div className="col-sm-6  d-flex flex-column">
                    <TextField sx={{ bgcolor:'white'}} placeholder='First Name'/>
                    <TextField sx={{ bgcolor:'white',marginTop:'20px'}} placeholder='Last Name'/>
                    <TextField sx={{ bgcolor:'white',marginTop:'20px'}} placeholder='Email'/>
                </div>
                <div className="col-sm-6">
                {/* <TextField sx={{width:'415px', height:'200px',bgcolor:'white'}}/> */}
                <TextField sx={{width:'420px',bgcolor:'white',color:''}}
          id="outlined-multiline-static"
          
          multiline
          rows={8}
          
          placeholder='Message'
        />
                </div>
            </div>
            <div className='text-center mt-4'>
            {/* <button className='btn btn-secondary ms-auto ' >Send Message</button> */}
            <Button variant="contained" color='success'>
            Send Message
             </Button>

            </div>
           
        </div>
        
        
       

        
      
      
    </div>
  )
}

export default ContactUs
