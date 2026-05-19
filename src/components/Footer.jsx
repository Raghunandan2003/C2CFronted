import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="logo">
              <svg width="36" height="36" viewBox="0 0 42 42" fill="none">
                <polygon points="21,2 38,11.5 38,30.5 21,40 4,30.5 4,11.5" fill="#1e6fbf"/>
                <path d="M26,13 A10,10 0 1,0 26,29" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
                <path d="M23,17 A6,6 0 1,0 23,25" fill="none" stroke="#00c2e0" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
              <div>
                <div className="logo-text" style={{ fontSize: '1rem' }}>C2C <span>NEXORA</span></div>
                <div className="logo-sub">Technologies Pvt Ltd</div>
              </div>
            </a>
            <p className="footer-desc" style={{ marginTop: '1rem' }}>Connecting talent to opportunity through technology education. Bengaluru's trusted skilling partner for individuals, universities, and corporations.</p>
            <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.25)', letterSpacing: '2px', textTransform: 'uppercase' }}>
              Connect · Collaborate · Create
            </div>
          </div>
          
          <div className="footer-col">
            <h4>Programs</h4>
            <ul>
              <li><a href="#programs">Java Full Stack</a></li>
              <li><a href="#programs">MERN Full Stack</a></li>
              <li><a href="#programs">Cloud & DevOps</a></li>
              <li><a href="#programs">Angular / React</a></li>
              <li><a href="#programs">Corporate Training</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#about">Our Trainers</a></li>
              <li><a href="#placements">Placements</a></li>
              <li><a href="#about">University Partners</a></li>
              <li><a href="#about">Hire From Us</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>Connect</h4>
            <ul>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">YouTube</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">WhatsApp</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-copy">© 2025 C2C Nexora Technologies Pvt Ltd. All rights reserved.</div>
          <div className="footer-tagline">CONNECT · COLLABORATE · CREATE</div>
        </div>
      </div>
    </footer>
  );
}
