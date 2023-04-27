import React from 'react'
import "../style/Contact.css"
const Contact = () => {
  return (
    <div className='page-con'>
       <h1 className='us'> Contact Us</h1>
       <div className="first"></div>
       <form className='container'>
        <div className="item">
            <h2 >Email</h2>
            <input type="email" name="email" required placeholder='Enter Email' />
        </div>
        <div className="item">
            <h2 >Message</h2>
            <input type="text"  name="message" required placeholder='Enter Text' />
        </div>
        <button type="submit" className='sent'>Sent</button>

        <div className="form-conatct">
            <button className="mess"><i class="ri-message-3-fill"></i>Message</button>
            <button className="call"><i class="ri-phone-fill"></i>Get a Call back</button>
        </div>
       </form>
       <div className="second"></div>
       
    </div>
  )
}

export default Contact
