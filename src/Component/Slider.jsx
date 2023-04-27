import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../style/Slider.css"
import img1 from  "../assets/img1.png"
import t from "../assets/t.jpg"

export default function Services() {
  return (
    
        <Carousel infiniteLoop  autoPlay showStatus={false}   interval={1000} showThumbs={false} >
            <div>
                <img src={img1} alt=" one"  width="1920px" height="954px" />
                
                <h1 className='mainh'>Empoering Society Through Science</h1>
                <p className='para'>Food Lab is one point solution for all food safety needs</p>
                <button className='get'>Get Started</button>
            </div>
            <div>
              <img src={t} alt="" />
            </div>
        </Carousel>
      
   
  )
}