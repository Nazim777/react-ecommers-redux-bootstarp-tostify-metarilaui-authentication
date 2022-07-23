import React from 'react'
import './NewsLatter.css'

const NewsLatter = () => {
  return (
    <div>
        <div className="container mt-5" >
           <div className="row" style={{backgroundColor:'#3CB371',height:'150px'}}>
            <div className="col-sm-6 m-auto text-white ">
              <h1>Subscribe to our website</h1>

            </div>
            <div className="col-sm-6 m-auto" >
               <div className="content d-flex">
                <input type="text" placeholder='email' className='p-2' style={{border:'none',autofocus:'none',borderRadius:'10px'}} />
                <button type='submit' className='btn btn-secondary ms-2' style={{borderRadius:'10px',width:'100px'}}>Subscribe</button>
               </div>
               
                    
            </div>
           </div>
        </div>
      
    </div>
  )
}

export default NewsLatter

