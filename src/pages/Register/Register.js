import React,{useState} from 'react'
import './Register.css'
import {Link,useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [input ,setInuput] =useState({
    name:'',
    email:'',
    password:'',
    confirm_password:''
  })
  const handleChange=(e)=>{
    setInuput((prevstate)=>({
      ...prevstate,
      [e.target.name]:e.target.value
    }))
  }
  const navigate =useNavigate()
  const handleClick=(e)=>{
    e.preventDefault()
    if(input.name&&input.email&&input.password&&input.confirm_password){
      if(input.password===input.confirm_password){
        toast('register successfully!')
        setTimeout(() => {
          navigate('/login')
        },2000);

      }else{
        toast('password does not match!')
      }

    }else{
      toast('all fields are required!')
    }

  }
  return (
    <div className='wrapper'>
        <div className="container">
            <div className='col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 text-center'>
            <form className='rounded shadow mt-2 bg-white'>
               <h3 className='fw-bolder fs-4 mb-2 text-dark'>Create an Account</h3>
               <div className='fw-normal mb-4 text-muted'>
               {/* Already have an Account? <a href="" className='fw-bold text-primary text-decoration-none '> Login here</a> */}
               Already have an Account?  <Link to='/login' className='fw-bold text-primary text-decoration-none '>Login here</Link>
               </div>

               <div  className='text-muted text-center text-uppercase mb-3'>or</div>
                <a href="" className='btn btn-light w-100 mb-3 '>
                    <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="" className='img-fluid me-2'style={{width:'40px'}} /> Continue with google
                </a>


               <div class="form-floating mb-3">
                 <input type="email" class="form-control" id="floatingName" placeholder="Enter your name" name='name' value={input.name} onChange={handleChange} />
                 <label for="floatingName">Name</label>
              </div>

               <div class="form-floating mb-3">
                 <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" name='email' value={input.email}  onChange={handleChange}/>
                 <label for="floatingInput">Email address</label>
              </div>
                <div class="form-floating">
                 <input type="password" class="form-control" id="floatingPassword" placeholder="Password" name='password' value={input.password}  onChange={handleChange}/>
                 <label for="floatingPassword">Password</label>
                </div>
                <div class="form-floating">
                 <input type="password" class="form-control" id="floatingConfirmPassword" placeholder="Confirm  Password" name='confirm_password' value={input.confirm_password}  onChange={handleChange}/>
                 <label for="floatingConfirmPassword">Confirm Password</label>
                </div>
                
                <button type='submit'className='btn btn-primary w-100 my-4' onClick={handleClick}>Continue</button>
                {/* toast container */}
                <ToastContainer/>
               
            </form>



            </div>
        </div>
    </div>
  )
}

export default Register 
