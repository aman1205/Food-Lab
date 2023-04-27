import React from 'react'
import "../style/Navbar.css"
import logo from "../assets/Logo.png"
const Navbar = () => {



  return(
     <header className="header">
       <img
        src={logo}
        alt="thapa technical logo"
        class="logo"
      />

      <nav className="navbar">
        <ul className="navbar-list">
          <li><a className="navbar-link" href="#">Home</a></li>
          <li><a className="navbar-link" href="#">Services</a></li>
          <li><a className="navbar-link" href="#">Gallery</a></li>
          <li><a className="navbar-link" href="#">Co-traveller</a></li>
          <li> <a className="navbar-link" href='#'>FAQs</a></li>
          <li> <a className="navbar-link" href='#'>Contact Us</a></li>
          <li> <a className="navbar-link" href='#'>Register</a></li>
          <li> <a className="navbar-link" href='#'><i class="ri-menu-line"></i></a></li>
        </ul>
      </nav>

      <div className="mobile-navbar-btn">
        <ion-icon name="menu-outline" className="mobile-nav-icon"></ion-icon>
        <ion-icon name="close-outline" className="mobile-nav-icon"></ion-icon>
      </div>
    </header>
  )
}

export default Navbar
