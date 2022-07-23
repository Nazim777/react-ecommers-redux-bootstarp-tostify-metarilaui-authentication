import React ,{useState,useEffect} from 'react'
import './Categories.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
const Categories = () => {
   
   
  return (
    <div>
        <div className='container'>

           
                        <div className="row">
                     <div className="col-sm-6 maindiv">
                            <div className="image">
                                <img src='https://images.pexels.com/photos/705164/computer-laptop-work-place-camera-705164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='img-fluid' alt="" />
                            </div>
                            <div className="categoryInfo text-center">
                            <button className='btn btn-secondary'>
                                <Link to='/category/electronics' style={{textDecoration:'none',color:'white'}}><h5 >SHOP NOW</h5></Link>
                                </button>
                                <h4  className='text-white mt-2' style={{fontSize:'30px',fontWeight:'bold',background:'black',opacity:'0.5'}}>ELECTRONICS</h4>


                            </div>
                            {/* <Link to='/category/electronics'>electronics</Link> */}
                        </div>
                        <div className="col-sm-6 maindiv">
                           <div className="image">
                                <img src='https://images.pexels.com/photos/691046/pexels-photo-691046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='img-fluid' alt="" />
                            </div>
                            <div className="categoryInfo text-center">
                                <button className='btn btn-secondary'>
                                <Link to='/category/jewelery' style={{textDecoration:'none',color:'white'}}><h5 >SHOP NOW</h5></Link>
                                </button>
                                <h4 className='text-white mt-2' style={{fontSize:'30px',fontWeight:'bold',background:'black',opacity:'0.5'}}>JEWELERY</h4>
                        
                            </div>
                          
                        </div>
                        <div className="col-sm-6 maindiv">
                            <div className="image">
                                <img src='https://images.pexels.com/photos/9775771/pexels-photo-9775771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='img-fluid' alt="" />
                            </div>
                            <div className="categoryInfo text-center">
                            <button className='btn btn-secondary'>
                                <Link to="/category/men's clothing" style={{textDecoration:'none',color:'white'}}><h5 >SHOP NOW</h5></Link>
                                </button>
                                <h4  className='text-white mt-2' style={{fontSize:'30px',fontWeight:'bold',background:'black',opacity:'0.5'}}>MEN'S CLOTHING</h4>


                            </div>
                            {/* <Link to="/category/men's clothing">men's clothing</Link> */}
                        </div>
                        <div className="col-sm-6 maindiv">
                           <div className="image">
                                <img src='https://images.pexels.com/photos/9594678/pexels-photo-9594678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='img-fluid' alt="" />
                            </div>
                            <div className="categoryInfo text-center">
                            <button className='btn btn-secondary'>
                                <Link to="/category/women's clothing" style={{textDecoration:'none',color:'white'}}><h5 >SHOP NOW</h5></Link>
                                </button>
                                <h4  className='text-white mt-2 ' style={{fontSize:'30px',fontWeight:'bold',background:'black',opacity:'0.5'}}>WOMEN'S CLOTHING</h4>


                        
                            </div>
                            {/* <Link to="/category/women's clothing">women's clothing</Link> */}
                        </div>
                
               
            </div>
                       
        </div>
      
    </div>
  )
}

export default Categories
