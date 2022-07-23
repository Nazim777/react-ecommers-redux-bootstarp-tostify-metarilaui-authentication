import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

import { useSelector } from 'react-redux';
//import { cartQuantity } from '../../components/Redux/Feature/ProductSlice';
import { useDispatch } from 'react-redux/es/exports';
import { getSingleProduct } from '../../components/Redux/Feature/ProductSlice';
import { add,remove } from '../../components/Redux/Feature/ProductSlice'; 
import { getAddToCartProduct } from '../../components/Redux/Feature/ProductSlice';



const SingleProduct = () => {
    const dispacth = useDispatch()
    const [num,setnum] = useState(0)
    const {singleProduct} = useSelector((state)=>state.app)
   // console.log(singleProduct)
   const [color,setcolor] = useState({
    color:''
   })
   const handleChange1 = (e) =>{
      
      setcolor((prevstate)=>({
         ...prevstate,
        [e.target.name]:e.target.value
      }))
       
       
   }
   console.log(color)
  const [size,setsize] =useState({
    size:''
  })
  const handleChange2=(e)=>{
   
   setsize((prevstate)=>({
     ...prevstate,
    [e.target.name]:e.target.value
   }))
  }
console.log(size)



    
    const addProduct=()=>{
        
       if(num>0){
        setnum(num+1)
        if(singleProduct){
            singleProduct.map((item)=>{
                dispacth(add({item,color,size}))
            })
        }
       }
       
    }
    const removeProduct=()=>{
        if(0<num){
            setnum(num-1)
            if(singleProduct){
                singleProduct.map((item)=>{
                    return dispacth(remove(item.id))
                   
                })
            }
           

        }
       
    }
   



    
   // const navigate =useNavigate()
    const handleClick=(item)=>{
        // navigate('/cart')
        
        if(num==0 && color.color && size.size){
            setnum(num+1)
         //  dispacth(add(item))
       dispacth(add({item,color,size}))
    //    setcolor('')
    //    setsize('')
           

        }
         

    }
    // const handleClick2=(id)=>{
    //     dispacth(getAddToCartProduct(id))

    // }
    
  return (
    <div>
        <div className="container">
            
            
            {singleProduct&&singleProduct.map((item)=>{
                return(
                    <>

<div className="row">
                <div className="col-sm-6">
                    <div className="product-image" style={{width:'400px',}}>
                    <img src={item.image} alt=""  className='img-fluid'/>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="product-title">
                        <h1>{item.title}</h1>
                    </div>
                    <div className="product-description">
                        <p>{item.description}</p>
                    </div>
                    <div className="product-price">
                        <h1>${item.price}</h1>
                    </div>
                    <div className="row">
                        <div className="col-sm-5 mb-xm-2">
                        <select className="form-select" name='color'  onChange={handleChange1} aria-label="Default select example">
                            <option selected>Color</option>
                            <option value="Orange">Orange</option>
                            <option value="Greeen">Green</option>
                            <option value="Cyan">Cyan</option>
                      </select>
                        </div>
                        <div className="col-sm-5 ">
                        <select className="form-select" name='size'  onChange={handleChange2} aria-label="Default select example">
                            <option selected>Size</option>
                            <option value="XS">XS</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                      </select>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-sm-5">
                            <div className="quantity-icons d-flex"  style={{cursor:'pointer'}}>
                                <div className="remove ">
                                   <h4 onClick={removeProduct}>-</h4> 

                                </div>
                                <div className="product-quantity ms-2 me-2 border border-info border-4 ps-2 pe-2 rounded border-opacity-50">
                                   <h4>{num}</h4>
                                </div>
                                <div className="add">
                                    <h4 onClick={addProduct}>+</h4>

                                </div>
                            </div>
                        </div>
                        <div className="col-sm-5">
                            <button className='btn btn-outline-success ' onClick={()=>handleClick(item)}>Add to cart</button>
                            {/* <button  className='btn btn-outline-success' onClick={()=>handleClick2(item.id)} >Add to cart</button> */}
                        </div>
                    </div>

                </div>
            </div>
                    </>
                )
            })}
        </div>

      
    </div>
  )
}

export default SingleProduct
