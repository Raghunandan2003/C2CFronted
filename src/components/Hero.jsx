import React from 'react';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <div className="hero-grid"></div>
      <div className="hero-inner">
        <div className="hero-content">
          <div className="hero-badge">🚀 Bengaluru's Premier Tech Skilling Institute</div>
          <h1 className="hero-title">
            Launch Your <span className="accent">Tech Career</span><br />
            With <span className="underline">Expert Training</span>
          </h1>
          <p className="hero-desc">C2C Nexora Technologies bridges the gap between education and industry. From fresh graduates to working professionals — we deliver job-ready skills through hands-on, industry-aligned programs.</p>
          <div className="hero-btns">
            <a href="#courses" className="btn-primary">Explore Courses →</a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScV0T23wkBzzK3Mh-YIf54_jWIJ5nVjoimVxIp9VlTWcbeUcw/viewform?usp=publish-editor" target="_blank" rel="noopener noreferrer" className="btn-outline">Book Free Demo</a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-num">5000<span>+</span></div>
              <div className="stat-label">Students Trained</div>
            </div>
            <div className="stat">
              <div className="stat-num">25<span>+</span></div>
              <div className="stat-label">Hiring Partners</div>
            </div>
            <div className="stat">
              <div className="stat-num">85<span>%</span></div>
              <div className="stat-label">Placement Rate</div>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-card-stack">
            <div className="hcard hcard-main">
              <div className="hcard-tag">Next Batch Starting</div>
              <div className="hcard-title">Full Stack Development</div>
              <div className="hcard-desc">Industry-driven curriculum covering Java, Spring Boot, Angular & Docker — job-ready in 6 months.</div>
              <div style={{ marginTop: '1.2rem', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <span style={{ background: 'rgba(0,194,224,0.15)', color: '#00c2e0', padding: '4px 12px', borderRadius: '20px', fontSize: '0.72rem', fontWeight: '600' }}>Java</span>
                <span style={{ background: 'rgba(0,194,224,0.15)', color: '#00c2e0', padding: '4px 12px', borderRadius: '20px', fontSize: '0.72rem', fontWeight: '600' }}>Spring Boot</span>
                <span style={{ background: 'rgba(0,194,224,0.15)', color: '#00c2e0', padding: '4px 12px', borderRadius: '20px', fontSize: '0.72rem', fontWeight: '600' }}>Angular</span>
                <span style={{ background: 'rgba(0,194,224,0.15)', color: '#00c2e0', padding: '4px 12px', borderRadius: '20px', fontSize: '0.72rem', fontWeight: '600' }}>Docker</span>
              </div>
            </div>
            <div className="hcard hcard-float1">
              <div className="hcard-icon">☁️</div>
              <div className="hcard-title">Cloud & DevOps</div>
              <div className="hcard-desc">AWS, Kubernetes, CI/CD</div>
            </div>
            <div className="hcard hcard-float2">
              <div className="hcard-icon" style={{ background: 'var(--cyan)' }}>🎯</div>
              <div className="hcard-title">100% Placement</div>
              <div className="hcard-desc">Assured career support</div>
            </div>
          </div>
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
