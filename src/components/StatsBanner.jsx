import React from 'react';

export default function StatsBanner() {
  const stats = [
    { num: '5000', suffix: '+', label: 'Students Trained' },
    { num: '25', suffix: '+', label: 'Hiring Partners' },
    { num: '85', suffix: '%', label: 'Placement Rate' },
    { num: '8', suffix: '+', label: 'Years of Excellence' }
  ];

  return (
    <div className="stats-banner">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, idx) => (
            <React.Fragment key={idx}>
              <div className="stat-card reveal-card">
                <div className="stat-card-num">
                  {stat.num}<span>{stat.suffix}</span>
                </div>
                <div className="stat-card-label">{stat.label}</div>
              </div>
              {idx < stats.length - 1 && <div className="stat-divider"></div>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
