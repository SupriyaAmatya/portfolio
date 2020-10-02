import React from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll'
import resume from '../../assets/resume.pdf'

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <div className="container">
        <div className="navbar">
          <input type="checkbox" id="check" />
          <label htmlFor="check" className="checkbtn">
            <svg height="32px" id="Layer_1" style={{enableBackground:'new 0 0 32 32'}} version="1.1" viewBox="0 0 32 32" width="32px">
              <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" />
            </svg>
          </label>

          <div className="nav-logo">
            <Link to="top"><img src={logo} alt="user-logo"></img></Link>
          </div>
          <div className="nav-links">
            <div className="nav-item">
              <Link activeClass="active" to="aboutme" className="nav" smooth={true} duration={1000} offset={-80}>about</Link>
            </div>
            <div className="nav-item">
              <Link activeClass="active" to="portfolio" className="nav" smooth={true} duration={1000} offset={-80} >portfolio</Link>
            </div>
            <div className="nav-item">
              <Link activeClass="active" to="contact" className="nav" smooth={true} duration={1000} offset={-80}>contact me</Link>
            </div>
          </div>
          <div className="resume-btn">
            <a href={resume} className="resume" rel="noopener noreferrer" target="_blank" aria-label="resume">resume</a>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Navbar
