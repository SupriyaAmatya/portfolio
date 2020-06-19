import React, { Component } from 'react';

class Contact extends Component {

  render() {
    return (
      <div className="contact_wrapper">
        <div className="container">
          <div id="contact" className="contact_section">
            <h2 className="t-h2">Get In Touch</h2>
            <div className="divider" />
            <p className="t-body1">Have an idea for a project in mind or want to chat,feel free to contact me!</p>

            <div className="btn contact_btn">
              <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M0.00250244 8.75V26.25C0.00250244 27.4531 1.12732 28.4375 2.50209 28.4375H32.4972C33.872 28.4375 34.9968 27.4531 34.9968 26.25V8.75C34.9968 7.54688 33.872 6.5625 32.4972 6.5625H2.50209C1.12732 6.5625 0.00250244 7.54688 0.00250244 8.75ZM32.4972 8.75L17.4996 19.6875L2.50209 8.75H32.4972ZM2.50209 12.0312L12.5005 18.5938L2.50209 25.1562V12.0312ZM5.00169 26.25L13.7503 19.6875L17.4996 22.9688L21.249 19.6875L29.9976 26.25H5.00169ZM32.4972 25.1562L22.4988 18.5938L32.4972 12.0312V25.1562Z" fill="#203A4C" />
              </svg>

              <a href="mailto:linkin.suppu@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="linkedin">
                Message Me
              </a>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default Contact
