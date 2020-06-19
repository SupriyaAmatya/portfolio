import React from 'react'
import btn_icon from '../../assets/images/btn-icon.png';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="container">
        <div className="intro-section">
          <h1 className="t-h1">Hello, <span className="hand-wave"></span>
          </h1>
          <h1 className="t-h1">I'm <span className="name">Supriya Amatya.</span></h1>
          <p className="intro__tagline">Front-end designer and developer focused on building beautiful and interactive websites.</p>
          <Link className="btn about-me__button" to='aboutme' smooth={true} duration={1000} offset={-80}>
            <div className="btn__icon">
              <img src={btn_icon} alt="btn_icon" />
            </div>
            <div className="btn btn_content">about me</div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
