import React from 'react'
import "../style/Food.css"
import one from "../assets/1.png"
import so from "../assets/2.png"
import tt from "../assets/3.png"

const Food = () => {
  return (
    <div className="food">
      <h1>Food Lab Food Safety Services</h1>
      <dic className="food-con">
        <div className="food-img">
           <div className='f'>
           <img src={one} alt="Error" />
           
           </div>
           
           <div className='s'>
              <img src={tt} alt="Problem" />
           </div>

           <div className='t'>
            <img src={so} alt="check" />
            
           </div>
        </div>
        <div className="food-text">
            <p>Aperiam quia sapiente vel consequatur consequatur omnis sed autem quae. Ipsa et minus consequatur vero et doloribus. Ex error illum consequatur amet ea occaecati odit. Quia similique dolorum officiis distinctio magnam ut facilis. Et dolore est inventore ea et molestiae earum.</p>
        </div>
      </dic>
    </div>
  )
}

export default Food
