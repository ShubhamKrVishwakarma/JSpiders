import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <header>
        <div className='header-top flexSB'>
            <div className="logo">
                <h1>JSpiders</h1>
                <span>QUALITY EDUCATION & LEARNING</span>
            </div>
            <div className='flex header-social-links'>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-youtube"></i>
            </div>
        </div>
        <nav className="flexSB">
            <ul className="flexSB">
                <li>Home</li>
                <li>All Courses</li>
                <li>About</li>
                <li>Team</li>
                <li>Placement</li>
                <li>Contact</li>
            </ul>
            <button>Get Started</button>
        </nav>
    </header>
  )
}

export default Header
