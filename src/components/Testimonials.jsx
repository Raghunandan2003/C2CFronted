import React from 'react';

export default function Testimonials() {
  const reviews = [
    {
      stars: '★★★★★',
      text: '"The Java Full Stack program at C2C Nexora completely transformed my career. Within 3 months of completing the course, I was placed at a top IT firm with a 5 LPA package. The trainers are exceptional."',
      name: 'Ravi Kumar',
      role: 'Software Engineer ',
      avatarBg: '#1e6fbf',
      initials: 'RK'
    },
    {
      stars: '★★★★★',
      text: '"As a BCA graduate with no IT experience, I was nervous. But the structured curriculum and constant placement support gave me the confidence to crack interviews. Best decision of my life."',
      name: 'Priya Sharma',
      role: 'Associate Developer ',
      avatarBg: '#0f6e56',
      initials: 'PS'
    },
    {
      stars: '★★★★★',
      text: '"The JNTUA internship program gave me industry exposure during my final year itself. Real projects, real deadlines, and an amazing team. I got a pre-placement offer before graduating!"',
      name: 'Arjun Mehta',
      role: 'Jr. Developer ',
      avatarBg: '#534ab7',
      initials: 'AM'
    }
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <div className="centered">
          <div className="section-label">Student Success</div>
          <h2 className="section-title">What Our Students Say</h2>
        </div>
        <div className="testi-grid">
          {reviews.map((rev, idx) => (
            <div key={idx} className="testi-card">
              <div className="testi-stars">{rev.stars}</div>
              <p className="testi-text">{rev.text}</p>
              <div className="testi-author">
                <div className="testi-avatar" style={{ background: rev.avatarBg }}>
                  {rev.initials}
                </div>
                <div>
                  <div className="testi-name">{rev.name}</div>
                  <div className="testi-role">{rev.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
