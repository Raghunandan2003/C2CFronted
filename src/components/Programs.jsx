import React from 'react';

export default function Programs() {
  const programList = [
    {
      icon: '💻',
      iconClass: 'blue',
      title: 'Full Stack Development',
      desc: 'End-to-end training in Java, Spring Boot, Hibernate, Microservices, Angular — covering both backend and frontend for complete developer readiness.',
      tags: ['Java', 'Spring Boot', 'Angular', 'Docker'],
      linkText: 'Enroll Now →',
      linkHref: '#contact'
    },
    {
      icon: '☁️',
      iconClass: 'gold',
      title: 'Cloud & DevOps',
      desc: 'AWS, Azure, Docker, Kubernetes, CI/CD pipelines — build the infrastructure skills that modern tech companies urgently need.',
      tags: ['AWS', 'Docker', 'Kubernetes', 'Jenkins'],
      linkText: 'Enroll Now →',
      linkHref: '#contact'
    },
    {
      icon: '🏢',
      iconClass: 'coral',
      title: 'Corporate L&D',
      desc: 'Custom Learning & Development solutions for IT companies — competency mapping, onboarding batches, and upskilling programs tailored to your tech stack.',
      tags: ['Custom', 'On-site', 'E-Learning'],
      linkText: 'Talk to Us →',
      linkHref: '#contact'
    }
  ];

  return (
    <section className="programs" id="programs">
      <div className="container">
        <div className="centered">
          <div className="section-label">What We Offer</div>
          <h2 className="section-title">Our Training Programs</h2>
          <p className="section-desc">From individual skill development to large-scale skilling initiatives — we have a program for every learning need.</p>
        </div>
        <div className="programs-grid">
          {programList.map((prog, index) => (
            <div key={index} className="prog-card reveal-card">
              <div className={`prog-icon ${prog.iconClass}`}>{prog.icon}</div>
              <h3>{prog.title}</h3>
              <p>{prog.desc}</p>
              <div className="prog-tags">
                {prog.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="prog-tag">{tag}</span>
                ))}
              </div>
              <a href={prog.linkHref} className="prog-link">{prog.linkText}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
