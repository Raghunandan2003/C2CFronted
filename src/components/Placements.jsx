import React from 'react';

export default function Placements() {
  const companies = [
    'Infosys', 'Wipro', 'TCS', 'Cognizant', 'HCL Tech',
    'Accenture', 'Capgemini', 'Tech Mahindra', 'Mphasis', 'Mindtree'
  ];

  // Duplicate for seamless horizontal loop
  const duplicatedCompanies = [...companies, ...companies];

  const stats = [
    { num: '85%', label: 'Overall Placement Rate' },
    { num: '₹4.5L', label: 'Average Package (Fresher)' },
    { num: '25+', label: 'Active Hiring Partners' }
  ];

  return (
    <section className="placement" id="placements">
      <div className="container">
        <div className="centered">
          <div className="section-label">Our Alumni Work At</div>
          <h2 className="section-title">Associated with Top Companies</h2>
        </div>
        
        <div className="companies-wrap">
          <div className="companies-track">
            {duplicatedCompanies.map((company, idx) => (
              <div key={idx} className="company-logo">
                <span className="company-name">{company}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="placement-stats">
          {stats.map((stat, idx) => (
            <div key={idx} className="pstat">
              <div className="pstat-num">{stat.num}</div>
              <div className="pstat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
