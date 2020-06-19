import React, { useEffect } from 'react'
import profile from '../assets/images/profile.jpg'

import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(()=>{
    AOS.init({
      once: true,
      duration: 1000,
      offset:400
    })
  })

  return (
    <div className="about-me__wrapper" id="aboutme">
      <div className="container">
        <div data-aos="fade-up" className="row about_section">
          <div className="col4-2 mr-4 about_content">
            <h2 className="t-h2">About Me</h2>
            <div className="divider"></div>
            <div className="hidden-profile">
              <div className="image_wrapper">
                <img src={profile} alt="profile" />
              </div>
            </div>
            <div className="para">
              <p className="t-body1">I am a Web Developer with enthusiasm and focus on Frontend Development and Scripting.</p>
              <p className="t-body1">I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are required.</p>
              <p className="t-body1">I love learning new and better ways to create seamless user experiences with clean, efficient, and scalable code.</p>
            </div>
            <div className="btn view-btn">
              <a className="" href="/resume.pdf" rel="noopener noreferrer" target="_blank" aria-label="resume">View Resume</a>
            </div>
          </div>
          <div className="col4-2 about_image">
            <div className="image_wrapper">
              <img src={profile} alt="profile" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
