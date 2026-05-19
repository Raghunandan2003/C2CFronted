import React, { useState } from 'react';

export default function Courses() {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All Courses' },
    { id: 'dev', label: 'Development' },
    { id: 'data', label: 'Data & AI' },
    { id: 'cloud', label: 'Cloud & Infra' }
  ];

  const courseList = [
    { cat: 'dev', name: 'Java Full Stack', dur: '6 mo', dotColor: 'var(--blue)' },
    { cat: 'dev', name: 'Spring Boot & Microservices', dur: '4 mo', dotColor: 'var(--blue)' },
    { cat: 'dev', name: 'Angular Development', dur: '3 mo', dotColor: 'var(--blue)' },
    { cat: 'dev', name: 'React.js', dur: '3 mo', dotColor: 'var(--blue)' },
    { cat: 'dev', name: 'Node.js & Express', dur: '3 mo', dotColor: 'var(--blue)' },
    { cat: 'data', name: 'SQL & Oracle Database', dur: '2 mo', dotColor: '#00c2e0' },
    { cat: 'cloud', name: 'Docker & Kubernetes', dur: '2 mo', dotColor: '#f0a500' },
    { cat: 'cloud', name: 'DevOps with Jenkins', dur: '3 mo', dotColor: '#f0a500' },
    { cat: 'dev', name: 'MERN Full Stack Development', dur: '6 mo', dotColor: '#10b981' }
  ];

  const filteredCourses = activeTab === 'all'
    ? courseList
    : courseList.filter(course => course.cat === activeTab);

  return (
    <section className="courses" id="courses">
      <div className="container">
        <div className="section-label">All Courses</div>
        <h2 className="section-title">Find Your Program</h2>
        
        <div className="course-tabs">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="courses-list" id="courseList">
          {filteredCourses.map((course, idx) => (
            <div key={idx} className="course-item" data-cat={course.cat}>
              <span className="ci-dot" style={{ background: course.dotColor }}></span>
              <span className="ci-name">{course.name}</span>
              <span className="ci-dur">{course.dur}</span>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <a href="#contact" className="btn-primary">Request Full Brochure →</a>
        </div>
      </div>
    </section>
  );
}
