import React from 'react'
import './ForgetPassword.css'
const ForgetPassword = () => {
  return (
    <div className='wrapper'>
        <div className="container">
            <div className='col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 text-center'>
            <form className='rounded shadow mt-2 bg-white'>
               <h3 className='fw-bolder fs-4 mb-2 text-dark'>Send your Email</h3>
               <div class="form-floating mb-3">
                 <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                 <label for="floatingInput">Email address</label>
              </div>
             <button type='submit'className='btn btn-primary w-100 my-4'>Submit</button>
            </form>

            </div>
        </div>
    </div>
  )
}

export default ForgetPassword
