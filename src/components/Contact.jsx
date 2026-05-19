import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: '',
    message: ''
  });

  const [submitStatus, setSubmitStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('submitting');

    const API_URL = 'https://c2cbackend-hi04.onrender.com';
    try {
      const response = await fetch(`${API_URL}/api/enroll`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', phone: '', email: '', course: '', message: '' });
      } else {
        throw new Error('Server returned an error');
      }
    } catch (err) {
      console.error('Backend submission failed:', err.message);
      setSubmitStatus('error');
    }

    // Reset button message after 4 seconds
    setTimeout(() => {
      setSubmitStatus('idle');
    }, 4000);
  };

  const getButtonText = () => {
    if (submitStatus === 'submitting') return 'SENDING REQUEST...';
    if (submitStatus === 'success') return '✓ REQUEST RECEIVED — WE\'LL CALL YOU SOON!';
    if (submitStatus === 'error') return '❌ ERROR SUBMITTING. TRY AGAIN';
    return 'BOOK FREE DEMO →';
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="centered">
          <div className="section-label">Get In Touch</div>
          <h2 className="section-title">Start Your Journey Today</h2>
        </div>
        <div className="contact-grid">
          <div className="contact-info">
            <h3>Reach Us Directly</h3>
            <div className="contact-item">
              <div className="ci-icon">📞</div>
              <div>
                <div className="ci-label">Phone</div>
                <div className="ci-val">+91 7975841161</div>
              </div>
            </div>
            <div className="contact-item">
              <div className="ci-icon">✉️</div>
              <div>
                <div className="ci-label">Email</div>
                <div className="ci-val">info@c2cnexora.com</div>
              </div>
            </div>
            <div className="contact-item">
              <div className="ci-icon">📍</div>
              <div>
                <div className="ci-label">Location</div>
                <div className="ci-val">Bengaluru, Karnataka, India</div>
              </div>
            </div>
            <div className="contact-item">
              <div className="ci-icon">⏰</div>
              <div>
                <div className="ci-label">Working Hours</div>
                <div className="ci-val">Mon – Sat, 9:00 AM – 7:00 PM</div>
              </div>
            </div>
            <div style={{ marginTop: '2rem' }}>
              <div className="ci-label" style={{ marginBottom: '1rem' }}>Follow Us</div>
              <div className="social-links">
                <a href="#" className="social-link">in</a>
                <a href="#" className="social-link">▶</a>
                <a href="#" className="social-link">f</a>
                <a href="#" className="social-link">ig</a>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <h3 style={{ color: '#fff', fontFamily: "'Syne', sans-serif", fontSize: '1.2rem', marginBottom: '1.5rem' }}>
              Book a Free Demo Class
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="course">Course Interest</label>
                <select
                  id="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a program</option>
                  <option value="Java Full Stack Development">Java Full Stack Development</option>
                  <option value="MERN Full Stack">MERN Full Stack</option>
                  <option value="Cloud & DevOps">Cloud & DevOps</option>
                  <option value="Angular / React">Angular / React</option>
                  <option value="Corporate Training">Corporate Training</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message (Optional)</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your background or goals..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn-submit"
                id="submitBtn"
                style={{
                  background: submitStatus === 'success' ? '#10b981' : '',
                  pointerEvents: submitStatus === 'submitting' ? 'none' : 'auto'
                }}
              >
                {getButtonText()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
