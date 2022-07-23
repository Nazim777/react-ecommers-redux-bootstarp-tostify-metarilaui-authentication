import React,{useState,useEffect} from 'react'
import './Product.css'
import Products from '../../components/Products/Products'
//import productLists from '../../components/Products/ProductList'
import axios from 'axios';


const Product = () => {
  const [data, setData] = useState('')
    const fetchData =async()=>{
       const result = await axios.get('https://fakestoreapi.com/products')
       setData(result.data)
    }
    useEffect(()=>{
        fetchData()
       
    },[])
   // console.log(data)
  return (
    <div className='Container2'>
       
      {
        data&& data.map((item)=>{
          return(
            <div >
              <Products item={item} key={item.key}/>
            </div>
          )
        })
      }
      
    </div>
  )
}

export default Product
