import React from 'react';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-img-wrap">
            <div className="about-img">
              <div className="about-center-logo">
                <svg width="120" height="120" viewBox="0 0 42 42" fill="none">
                  <polygon points="21,2 38,11.5 38,30.5 21,40 4,30.5 4,11.5" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
                  <path d="M26,13 A10,10 0 1,0 26,29" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/>
                  <path d="M23,17 A6,6 0 1,0 23,25" fill="none" stroke="#00c2e0" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <div style={{ color: '#fff', fontFamily: "'Syne', sans-serif", fontSize: '1.2rem', fontWeight: 800, marginTop: '0.5rem' }}>C2C NEXORA</div>
                <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', letterSpacing: '2px' }}>TECHNOLOGIES PVT LTD</div>
              </div>
            </div>
            <div className="about-badge-float top">
              <div className="abf-num">8<span>+</span></div>
              <div className="abf-label">Years of Excellence</div>
            </div>

          </div>
          <div className="about-content">
            <div className="section-label">Who We Are</div>
            <h2 className="section-title">Transforming Careers Through Technology Education</h2>
            <p className="section-desc">C2C Nexora Technologies Pvt Ltd is a Bengaluru-based technology training and skilling organization. We connect talented individuals with industry-aligned programs, collaborate with universities & corporations, and create pathways to rewarding tech careers.</p>
            <div className="about-points">
              <div className="about-point">
                <div className="ap-icon">🎓</div>
                <div className="ap-text">
                  <h4>University Partnerships</h4>
                  <p>
                    Collaborating with universities and colleges to deliver industry-focused training programs, workshops, internships, and certification courses in AI, Cloud, Full Stack Development, DevOps, and emerging technologies to improve student employability and practical skills.
                  </p>
                </div>
              </div>
           
              <div className="about-point">
                <div className="ap-icon">💼</div>
                <div className="ap-text">
                  <h4>Corporate Training</h4>
                  <p>Customized L&D programs for IT companies — from fresh onboarding batches to lateral upskilling in advanced technologies.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
