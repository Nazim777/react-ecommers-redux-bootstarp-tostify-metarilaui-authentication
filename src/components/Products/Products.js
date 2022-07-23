import React,{useState} from 'react'
import './Products.css'

  import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
  import SearchIcon from '@mui/icons-material/Search';
  import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
  import { useNavigate } from 'react-router-dom';
  import {useDispatch} from 'react-redux'
  import { getSingleProduct } from '../../components/Redux/Feature/ProductSlice';
  import { add,addwiseList } from '../../components/Redux/Feature/ProductSlice';
  import { ToastContainer, toast } from 'react-toastify';
  
 


const Products = ({item}) => {
    
   
const dispacth =useDispatch()  

 const handleClick =()=>{
    
   dispacth(addwiseList(item))
   toast('added to your wiselist!')
   
   
 }

   const navigate = useNavigate()
   
   const handleClick2 =()=>{

    navigate(`/singleproduct/${item.id}`)
    dispacth(getSingleProduct(item.id))
   }
   
  return (
    
   <div className='Container1'>
    {/* // toastContainer */}
     <ToastContainer/> 
    <img src={item.image} className='image2' alt="" />
    <div className="info">
        <div className="icon">
            <FavoriteBorderIcon onClick={handleClick} />
           

        </div>
        <div className="icon">
            <SearchIcon/>

        </div>
        <div className="icon">
            <ShoppingCartIcon onClick={handleClick2}/>
           
            {/* <ShoppingCartIcon /> */}

        </div>
    </div>


   </div>
  )
}

export default Products
