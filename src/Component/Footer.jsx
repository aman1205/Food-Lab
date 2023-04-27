import React from 'react'
import logo from "../assets/Logo.png"
import "../style/Footer.css"
const Footer = () => {
  return (
    <footer className='footer'>
        <div className="leftside">
            <img src={logo} alt="" className='logo-footer' />
            <h2 className='address'>203, Abc road , xyz</h2>
            <h4 className='contacts'><span>Phone:</span> +91 44 4269 2288</h4>
            <h4 className='contacts'> <span>Email:</span> admin@parikshan.net.in</h4>

        </div>

        <div className="rightside">
            <div className="footer-col">
                <h4 className='list-main'>Useful Link </h4>
                <ul className='list'>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Support</li>
                    <li>Contact Us </li>
                </ul>
            </div>

            <div className="footer-col-sec">
                <h4 className='list-main-second'>Site Map</h4>
                <ul className='list'>
                    <li>Watch</li>
                    <li>Blog</li>
                    <li>Vist us </li>
                    <li>News</li>
                    <li>Chat</li>
                    <li>Top</li>
                </ul>
            </div>
        </div>

        <h2 className='copy'>Food Labs Inc. © Copyright 2022. All Rights Reserved.</h2>
    </footer>
  )
}

export default Footer


