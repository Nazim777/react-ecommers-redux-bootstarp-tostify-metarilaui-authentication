import React,{useState,useEffect} from 'react'
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {add, remove, } from '../../components/Redux/Feature/ProductSlice';
import { useDispatch } from 'react-redux';




const Cart = () => {
    
    
    const {cart} = useSelector((state)=>state.app)
  // console.log(cart)

   const dispatch = useDispatch()
    const handleClick2=()=>{
        dispatch(remove(cart))
       
    }



   const navigate = useNavigate()
   const handleClick=()=>{
    navigate('/product')
   }
    
 const {wiseList} =useSelector((state)=>state.app)
// console.log(wiseList)
  return (
    <div>
        <h1 className='text-center mb-5'>YOUR BAG</h1>
       
             <div className="container">
            <div className="row mb-5">
                <div className="col-sm-3">
                    <div className="button">
                        <button className='btn btn-outline-success' onClick={handleClick}>CONTINUE SHOPPING</button>
                    </div>
                </div>
                <div className="col-sm-7">
                    <div className="wiselist d-flex">
                     <Link href="#" underline="always" className='me-2'>
                    {`Shopping bag(${cart.length})`}
                    </Link>
                    <Link href="#" underline="always">
                    {`Your wiselist(${wiseList.length})`}
                    </Link>

                    </div>
                </div>
                <div className="col-sm-2">
                    <div className="button">
                        <button className='btn btn-dark'>CHECKOUT NOW</button>
                    </div>
                </div>
            </div>
            
            <div className="row">

               

         <div className="col-sm-6">
               
               <div className="row">
                   {
                    cart && cart.map((item)=>{
                       // console.log(item)
                        return(
                            <>
                            <div className="col-6">
                       <div className="cart-image mb-4" >
                           <img src={item.item.image} alt="" className='img-fluid ' style={{width:'200px',height:'200px'}}/>
                       </div>
                   </div>
                   <div className="col-6">
                       <div className="product mb-3 ">
                           PRODUCT: {item.item.title}
                       </div>
                       <div className="id mb-3">ID: {item.item.id} </div>
                      {/* color and size */}
                     
                                 <div className="color mb-3">COLOR: {item.color.color}</div>
                                 <div className="size">SIZE: {item.size.size} </div>
                                
                               
                   </div>


                   
                            </>
                        )
                    })
                   }
               </div>
           </div>
           <div className="col-sm-2 ">
              {
                cart && cart.map((item2)=>{
                    return(
                        <>
                        <div className="row flex-column mb-4 mt-4">
                            <div className="col-2" style={{cursor:'pointer'}}>
                            <div className="remove ">
                              <h4>-</h4> 

                           </div>
                           <div className="  border border-info border-4 ps-2 pe-3   rounded border-opacity-50">
                              <h4>1</h4>
                           </div>
                           <div className="add">
                               <h4>+</h4>

                           </div>
                            </div>
                            <div className="col">
                            <div className="product-price mt-4">
                   <h2>${item2.item.price}</h2>
               </div>
                            </div>
                            
                        </div>







                        {/* <div className="quantity-icons d-flex mt-5 mb-5" style={{cursor:'pointer'}}>
                           <div className="remove ">
                              <h4>-</h4> 

                           </div>
                           <div className="product-quantity ms-2 me-2 border border-info border-4 ps-2 pe-2 rounded border-opacity-50">
                              <h4>1</h4>
                           </div>
                           <div className="add">
                               <h4>+</h4>

                           </div>
                        </div>
                       

              <div className="product-price mt-4">
                   <h2>${item2.price}</h2>
               </div> */}

                        </>
                    )

                })
              }

            

           </div>



                
                <div className="col-sm-4 ">
                    <h4>ORDER SUMMARY</h4>
                    <div className="row">
                        <div className="col-6">
                            <h6 className='mb-3'>Subtotal</h6>
                            <h6 className='mb-3'>Estimated Shipping</h6>
                            <h6 className='mb-3'>Shipping Discount</h6>
                            <h1 className='mb-3'>Total</h1>
                           

                        </div>
                        <div className="col-6">
                            <h6 className='mb-3'>$80</h6>
                            <h6 className='mb-3'>$5.90</h6>
                            <h6 className='mb-3'>$-5.90</h6>
                            <h1 className='mb-3'>$80</h1>
                        </div>
                        <div className="checkout-button d-flex justify-content-between">
                           <button className='btn btn-outline-success'>CHECKOUT NOW</button>
                           <button className='btn btn-outline-success' onClick={handleClick2}>REMOVE TO CART</button>
                           </div>
                    </div>
                </div>
            </div>
        </div>
      
           
        
    </div>
  )
}

export default Cart
