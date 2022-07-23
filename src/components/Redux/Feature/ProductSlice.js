import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

 export const getSingleProduct= createAsyncThunk('/get/products',async(id)=>{
    const {data} = await axios.get(`https://fakestoreapi.com/products/${id}`)
    return data
    
})
export const getAddToCartProduct = createAsyncThunk('/get/product/cart',async(id)=>{
    const {data} = await axios.get(`https://fakestoreapi.com/carts/${id}`)
    return data
})
const ProductSlice = createSlice({
    name:'app',
    initialState:{
        loading:false,
        Quantity:[],
        singleProduct:[],
        cart:[],
        error: null,
        wiseList:[],
        ProductDetails:[
            
        ]
       
    },
    reducers:{
   
        add:(state,action)=>{
            // state.cart.push( action.payload)
            state.cart.push( action.payload)
            
        },
        remove:(state,action)=>{
            // state.cart.filter((item)=>item.id!=action.payload)
            // console.log(action.payload)
            state.cart.pop(action.payload)
        },
        sigleProductDetail:(state,action)=>{
            state.ProductDetails.push(action.payload)
        },
        addwiseList:(state,action)=>{
            state.wiseList.push(action.payload) 
        }


    },
    extraReducers:{
        [getSingleProduct.pending]:(state,action)=>{
            state.loading= true
        },
        [getSingleProduct.fulfilled]:(state,action)=>{
            state.singleProduct= [action.payload]
            
          
        },
        [getSingleProduct.rejected]:(state,action)=>{
            state.error=action.payload
        },
        [getAddToCartProduct.pending]:(state,action)=>{
            state.loading= true
        },
        [getAddToCartProduct.fulfilled]:(state,action)=>{
            state.cart.push(action.payload)
            
          
        },
        [getAddToCartProduct.rejected]:(state,action)=>{
            state.error=action.payload
        },

    }
})
export const {add,remove,addwiseList}= ProductSlice.actions
export default ProductSlice.reducer