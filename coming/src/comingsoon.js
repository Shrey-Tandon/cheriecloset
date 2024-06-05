// src/ComingSoon.js
import React from 'react';
import './ComingSoon.css';
import logo from './c.png';
import instagramLogo from './i.png';

const ComingSoon = () => {
 
  return (
    <div className="coming-soon-container">
      <a
        href="https://www.instagram.com/cherie.closet03?igsh=eXB5aDF0cXh4NTV0"
        target="_blank"
        rel="noopener noreferrer"
        className="instagram-link"
      >
        <img src={instagramLogo} alt="Instagram" className="instagram-logo" />
       
      </a>
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <h1 className="coming-soon-text">
        Coming Soon<span className="dot">.</span><span className="dot">.</span><span className="dot">.</span>
      </h1>
      <footer className="footer">
        &copy; {new Date().getFullYear()} CHÉRIE CLOSET. All rights reserved.
      </footer>
    </div>
  );
};

export default ComingSoon;
