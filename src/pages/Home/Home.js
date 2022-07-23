import React from 'react'
import './Home.css'
import shopping1 from '../../image/shopping1.jpg'
import shopping2 from '../../image/shopping2.jpg'
import shopping3 from '../../image/shopping3.jpg'
import Product from '../Product/Product'
import ProductForHomePage from '../ProductForHomePage/ProductForHomePage'
import Categories from '../Categories/Categories'

const Home = () => {
  return (
   <div>
  <div id="carouselExampleCaptions" class="carousel slide carouseldiv" data-bs-ride="false">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" style={{height:'100vh'}}>
      <img src={shopping3} class="d-block w-100 "  alt="..."/>
      <div class="carousel-caption d-none d-md-block " style={{background:'black',opacity:'0.7'}}>
        <h2 style={{color:'white',fontWeight:'bold',}}>Letest Design</h2>
        <p className='text-white'>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item"  style={{height:'100vh'}}>
      <img src={shopping2} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      <h2 style={{color:'#107c67',fontWeight:'600'}}>Letest Design</h2>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item"  style={{height:'100vh'}}>
      <img src={shopping1} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      <h2 style={{color:'#107c67',fontWeight:'600'}}>Letest Design</h2>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<div className="category">
  <h1 className='text-center mt-3 mb-3'>Category</h1>
  <Categories/>
</div>


<h1 className='text-center mt-2'>Products</h1>
{/* <Product/> */}
<ProductForHomePage/>
   </div>
  )
}

export default Home
