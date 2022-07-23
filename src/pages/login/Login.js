import React,{useState} from 'react'
import './Login.css'
import { Link,useNavigate }from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Login = () => {
  const [input ,setInuput] = useState({
    email:'',
    password:''
  })
  const handleChange=(e)=>{
 setInuput((prevstate)=>({
  ...prevstate,
  [e.target.name]:e.target.value
 }))
  }
  const navigate = useNavigate()
  const handleClick =(e)=>{
    
    e.preventDefault()
    if(input.email&&input.password){
      toast('login successfully!')
     setTimeout(() => {
      navigate('/')
     },2000);

    }else{
    // alert('all field are required')
    toast('all fields are required!')
  

    }

  }
 
  return (
    <div className='wrapper'>
        <div className="container">
            <div className='col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 text-center'>
            <form className='rounded shadow mt-2 bg-white'>
               <h3 className='fw-bolder fs-4 mb-2 text-dark'>Login</h3>
               <div className='fw-normal mb-4 text-muted'>
                {/* New Here? <a href="" className='fw-bold text-primary text-decoration-none '> Create an account</a> */}
                New Here?  <Link to='/register' className='fw-bold text-primary text-decoration-none '> Create an account</Link>
                

               </div>

               <div className="form-floating mb-3">
                 <input type="email" className="form-control" id="floatingInput"  name='email' value={input.email} onChange={handleChange} placeholder="name@example.com"/>
                 <label for="floatingInput" >Email address</label>
              </div>
                <div className="form-floating">
                 <input type="password" className="form-control" id="floatingPassword" placeholder="Password"  name='password' value={input.password}  onChange={handleChange} />
                 <label for="floatingPassword" >Password</label>
                </div>
                <div className='mt-2 text-end'>
                    {/* <a href="" className='text-primary fw-bold text-decoration-none '>Forget Password?</a> */}
                    <Link to='/forgetpassword' className='text-primary fw-bold text-decoration-none'>Forget Password?</Link>
                </div>
                <button type='submit'className='btn btn-primary w-100 my-4' onClick={handleClick}>Continue</button>
                 {/* toast container */}
                 <ToastContainer />
                <div  className='text-muted text-center text-uppercase mb-3'>or</div>
                <a href="" className='btn btn-light w-100 mb-3 '>
                    <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="" className='img-fluid me-2'style={{width:'40px'}} /> Continue with google
                </a>
                <a href="" className='btn btn-light w-100 mb-3 '>
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/2048px-Facebook_f_logo_%282021%29.svg.png" alt="" className='img-fluid me-2'style={{width:'25px'}} /> Continue with facebook
                </a>
            </form>



            </div>
        </div>
    </div>
  )
}

export default Login
