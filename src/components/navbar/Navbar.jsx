import React from 'react'
import './navbar.css';

function Navbar() {
  return (
    <div>
      <header>
        <div className="logo">
              <span className="top_logo">
                  <p className="top_logo">HORIZONCITY</p>
              </span>
              <p className="bottom_logo">INTERIOR DESIGN</p>
          </div>
          <nav>
              <div className="navbar">
                  <a href="#">Home</a>
                  <a href="#">Service</a>
                  <a href="#">Portfolio</a>
                  <a href="#">Shop</a>
                  <a href="#">Blog</a>
                  <a href="#">Contact</a>
                  <a href="#">About Us</a>
                  <a href="#">Sign Up</a>
              </div>
          </nav>
          <div className="btns">
              <a href="#">Log In</a>
              <a href="#">Start project</a>
          </div>
        </header>
    </div>
  )
}

export default Navbar;