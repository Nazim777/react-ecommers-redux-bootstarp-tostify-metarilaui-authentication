import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./ProductSlice";
const Store = configureStore({
    reducer:{
        app:ProductSlice
    }
})
export default Store