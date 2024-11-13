import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <div className='header-top flexSB'>
            <div className="logo">
                <h1>JSpiders</h1>
                <span>QUALITY EDUCATION & LEARNING</span>
            </div>
            <div className='flex header-social-links'>
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-youtube"></i>
            </div>
        </div>
        <nav className="flexSB">
            <ul className="flexSB">
                <li>
                    <Link to="/" style={{ textDecoration: "none", color: "#5e72e4" }}>Home</Link>
                </li>
                <li>
                    <Link to="/courses" style={{ textDecoration: "none", color: "#5e72e4" }}>Courses</Link>
                </li>
                <li>
                    <Link to="/about" style={{ textDecoration: "none", color: "#5e72e4" }}>About</Link>
                </li>
                <li>
                    <Link to="/team" style={{ textDecoration: "none", color: "#5e72e4" }}>Team</Link>
                </li>
                <li>
                    <Link to="/placement" style={{ textDecoration: "none", color: "#5e72e4" }}>Placement</Link>
                </li>
                <li>
                    <Link to="/contact" style={{ textDecoration: "none", color: "#5e72e4" }}>Contact</Link>
                </li>
            </ul>
            <button>Get Started</button>
        </nav>
    </header>
  )
}

export default Header
