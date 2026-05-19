import React from 'react';

export default function WhyUs() {
  const advantages = [
    {
      num: '01',
      title: 'Industry-Certified Trainers',
      desc: 'All trainers hold NSDC and Generation India certifications with 5+ years of real-world industry experience in the technologies they teach.'
    },
    {
      num: '02',
      title: 'Live Project-Based Learning',
      desc: 'Students work on real client projects and case studies — not just theory. Every program ends with a deployable capstone project for your portfolio.'
    },
    {
      num: '03',
      title: 'Dedicated Placement Cell',
      desc: 'Our placement team conducts regular recruitment drives, resume workshops, mock interviews, and maintains active ties with 500+ hiring companies.'
    },
    {
      num: '04',
      title: 'Flexible Learning Modes',
      desc: 'Choose from weekday batches, weekend batches, online live sessions, or blended learning — designed around your schedule and learning style.'
    },
    {
      num: '05',
      title: 'Lifetime Alumni Network',
      desc: 'Join a community of 1000+ alumni working across top IT companies. Peer referrals, job alerts, and ongoing mentorship — forever.'
    }
  ];

  return (
    <section className="why">
      <div className="container">
        <div className="centered">
          <div className="section-label">Why C2C Nexora</div>
          <h2 className="section-title">The Nexora Advantage</h2>
          <p className="section-desc">We don't just teach technology — we engineer careers. Here's what sets us apart.</p>
        </div>
        <div className="why-grid">
          {advantages.map((adv, idx) => (
            <div key={idx} className="why-card reveal-card">
              <div className="why-num">{adv.num}</div>
              <div className="why-content">
                <h3>{adv.title}</h3>
                <p>{adv.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
