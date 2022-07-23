import React,{useState,useEffect} from 'react'
import './Category.css'
import axios from 'axios'
import Products from '../../components/Products/Products'
import { useParams } from 'react-router-dom'

const Category = () => {
    const [data,setData] = useState('')
  const {category} = useParams()
 // console.log(category)
    useEffect(()=>{
        const fetchData = async ()=>{
        const result =  await  axios.get(`https://fakestoreapi.com/products/category/${category}`)
          setData(result.data)
        }
        fetchData()


    },[])
   // console.log(data)
  return (
    <div className='Container2'>
        {
            data&& data.map((item)=>{
                return(
                    <div>
                   <Products item={item} key={item.key}/>
                    </div>
                )
            })
        }
      
    </div>
  )
}

export default Category
