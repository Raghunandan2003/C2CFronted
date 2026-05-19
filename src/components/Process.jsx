import React from 'react';

export default function Process() {
  const steps = [
    { num: '01', title: 'Enroll', desc: 'Choose your program & batch', active: true },
    { num: '02', title: 'Learn', desc: 'Hands-on training by experts', active: false },
    { num: '03', title: 'Build', desc: 'Real projects & portfolio', active: false },
    { num: '04', title: 'Interview Prep', desc: 'Mock sessions & resume review', active: false },
    { num: '05', title: 'Get Placed', desc: 'Campus drives & job referrals', active: false }
  ];

  return (
    <section className="process">
      <div className="container">
        <div className="centered">
          <div className="section-label">How It Works</div>
          <h2 className="section-title">Your Journey to a Tech Career</h2>
        </div>
        <div className="process-steps">
          {steps.map((step, idx) => (
            <div key={idx} className={`step ${step.active ? 'active' : ''}`}>
              <div className="step-circle">{step.num}</div>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
