import './App.css';
import React,{useState} from 'react';
import Login from './pages/login/Login';
import Register from './pages/Register/Register';
import Navbar from './components/Navbar/Navbar';
import ForgetPassword from './pages/ForgetPassword/ForgetPassword';
import Home from './pages/Home/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Product from './pages/Product/Product';
import Special from './pages/Special/Special';
import Toast from './components/LoginToast/LoginToast';
import About from './pages/About/About';
import Footer from './components/Footer/Footer';
import NewsLatter from './components/Newslatter/NewsLatter';
import SingleProduct from './pages/SingleProduct/SingleProduct';
import Cart from './pages/Cart/Cart';
import Category from './pages/CategoryItem/Category';
import ContactUs from './pages/ContactUs/ContactUs';
function App() {
 const [isLoggedIn,setisLoggedIn] = useState(true)
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='forgetpassword' element={<ForgetPassword/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={isLoggedIn?<Product/>:<Register/>}/>
        <Route path='/special' element={isLoggedIn?<Special/>:<Register/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
        <Route path='/singleproduct/:id' element={<SingleProduct/>}/>
        <Route path='/cart' element={<Cart/>}/>
        {/* <Route path='toast' element={<Toast/>}/> */}
        {/* <Route path='/product' element={<Product/>}/>
        <Route path='/special' element={<Special/>}/> */}
        <Route path='/category/:category' element={<Category/>}/>

      </Routes>
      <NewsLatter/>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
