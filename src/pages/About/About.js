import React from 'react'
import './About.css'
import image1 from '../../image/image1.png'


const About = () => {
  return (
    <div>
        <div className="container">
          
            <div className="row">
           
                <div className="col-sm-12 col-md-8 col-lg-8">
                    <div className="div1">
                        <div className="content">
                        <h1 className='text-center'>About us</h1>
                        </div>
                       <div className="images ">
                        <img src={image1} alt="" className='img-fluid' />
                       </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4">
                    <div className="div2">
                        <div className="aboutImage">
                            <img src="https://media.istockphoto.com/photos/portrait-of-handsome-smiling-young-man-with-crossed-arms-picture-id1200677760?k=20&m=1200677760&s=612x612&w=0&h=JCqytPoHb6bQqU9bq6gsWT2EX1G5chlW5aNK81Kh4Lg=" alt=""  className='img-fluid text-center' style={{height:'300px',width:'100%',objectFit:'cover'}}/>

                        </div>
                        <div className="aboutText mt-2 text-center">
                            <h5>hello this is Abdur Rahim</h5>
                            <p className='mt-2'>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, sint officiis doloribus expedita laborum non quasi excepturi quam deserunt. Quibusdam voluptatem omnis nemo. Ratione, at maxime consequuntur nam debitis non.
                            </p>

                        </div>
                        
                    </div>
                    <div className="div3">
                        <div className="category">
                            <div className="headerText mt-2 text-center">
                               <h4>Categories</h4>
                            </div>
                            <div className="categories d-flex justify-content-around">
                                <div className="category1">
                                <h5>Science</h5>
                                <h5>Sports</h5>
                                <h5>Science</h5>
                                </div>
                                <div className="category2"> 
                                <h5>Sports</h5>
                                <h5>Science</h5>
                                <h5>Sports</h5></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      
    </div>
  )
}

export default About
