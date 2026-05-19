import React, { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav>
      <div className="nav-inner">
        <a href="#" className="logo">
          <svg className="logo-hex" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points="21,2 38,11.5 38,30.5 21,40 4,30.5 4,11.5" fill="#1e6fbf"/>
            <path d="M26,13 A10,10 0 1,0 26,29" fill="none" stroke="#fff" stroke-width="3.5" stroke-linecap="round"/>
            <path d="M23,17 A6,6 0 1,0 23,25" fill="none" stroke="#00c2e0" stroke-width="2.5" stroke-linecap="round"/>
            <text x="27" y="22.5" fontFamily="Arial" fontWeight="800" fontSize="6" fill="#00c2e0" textAnchor="middle">2</text>
          </svg>
          <div>
            <div className="logo-text">C2C <span>NEXORA</span></div>
            <div className="logo-sub">Technologies Pvt Ltd</div>
          </div>
        </a>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#about" onClick={handleLinkClick}>About</a></li>
          <li><a href="#programs" onClick={handleLinkClick}>Programs</a></li>
          <li><a href="#courses" onClick={handleLinkClick}>Courses</a></li>
          <li><a href="#placements" onClick={handleLinkClick}>Placements</a></li>
          <li><a href="#contact" className="nav-cta" onClick={handleLinkClick}>Enroll Now</a></li>
        </ul>
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}
