import React,{useState} from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux/es/exports';

const Navbar = () => {
  const {cart} =useSelector((state)=>state.app)
 
  const [isLoggedIn,setisLoggedIn] = useState(true)
  const handleClick= ()=>{
    setisLoggedIn(false)
   
  }
  return (
    <div className='header 'style={{marginBottom:'150px'}}>
        <nav className="navbar navbar-expand-lg bg-white fixed-top">
  <div className="container">
    <a className="navbar-brand" href="#">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZmr2SLLIB4s9iPtS7Dc9obLPEgWCLawawDQ-RlsRR1_9WF-c4nUYN1dH549CslzPcrEw&usqp=CAU" alt="" className='img-fluid'style={{width:'100px'}} />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          {/* <a className="nav-link" aria-current="page" href="#">Home</a> */}
          <Link className="nav-link" to='/' >Home</Link>
        </li>

        <li className="nav-item">
          {/* <a className="nav-link" href="#">About Us</a> */}
          <Link className="nav-link" to='/about' >About Us</Link>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="#">Contact</a> */}
          <Link className="nav-link" to='/contact' >Contact</Link>
        </li>

        {isLoggedIn?
        <>
         <li className="nav-item">
          {/* <a className="nav-link" href="#">product</a> */}
          <Link className="nav-link" to='/product' >Product</Link>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="#">Special</a> */}
          <Link className="nav-link" to='/special' >Special</Link>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="#">Special</a> */}
          <Link className="nav-link" to='#'  onClick={handleClick}>Log Out</Link>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="#">Special</a> */}
          <Link className="nav-link" to='/cart'  >
          <Badge badgeContent={cart.length} color="primary">
            <ShoppingCartIcon />
      
          </Badge>

          </Link>
        </li>
        </>
        :<>
         <li className="nav-item">
          {/* <a className="nav-link" href="#">product</a> */}
          <Link className="nav-link" to='/login' >Login</Link>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="#">Special</a> */}
          <Link className="nav-link" to='/register' >Register</Link>
        </li>
        </>}
       
      </ul>
    </div>
  </div>
</nav>
        
      
    </div>
  )
}

export default Navbar
