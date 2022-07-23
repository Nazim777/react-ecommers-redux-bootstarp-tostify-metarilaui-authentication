import React,{useState,useEffect} from 'react'
import './ProductForHomePage.css'
import axios from 'axios'
import Products from '../../components/Products/Products'

const ProductForHomePage = () => {
    const [data, setData] = useState('')
    const fetchData =async()=>{
       const result = await axios.get('https://fakestoreapi.com/products')
       setData(result.data)
    }
    useEffect(()=>{
        fetchData()
       
    },[])
  return (
    <div className='Container2'>
         {
        data&& data.slice(0,7).map((item)=>{
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

export default ProductForHomePage
