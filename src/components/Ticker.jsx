import React from 'react';

export default function Ticker() {
  const items = [
    { text: 'Java Full Stack Development', bold: true },
    { text: 'Angular & React Development', highlight: ['Angular', 'React'] },
    { text: 'Cloud & DevOps Engineering', highlight: ['Cloud', 'DevOps'] },
    { text: 'Spring Boot & Microservices', highlight: ['Spring Boot'] },
    { text: 'Corporate Training & L&D', highlight: ['Corporate'] },
    { text: 'MERN Full Stack', bold: true },
    { text: 'Docker & Kubernetes', highlight: ['Docker', 'Kubernetes'] },
    { text: 'University Internship Programs', highlight: ['University'] },
    { text: 'SQL & Oracle Database', highlight: ['SQL'] },
    { text: 'Node.js & Express', highlight: ['Node.js'] }
  ];

  const renderItemText = (item) => {
    if (item.bold) {
      return <strong>{item.text}</strong>;
    }
    if (item.highlight) {
      let content = item.text;
      item.highlight.forEach((word) => {
        content = content.replace(word, `__BOLD__${word}__BOLD__`);
      });
      const parts = content.split('__BOLD__');
      return (
        <span>
          {parts.map((part, index) => 
            item.highlight.includes(part) ? <strong key={index}>{part}</strong> : part
          )}
        </span>
      );
    }
    return item.text;
  };

  // We duplicate items for infinite carousel effect
  const doubleItems = [...items, ...items];

  return (
    <div className="ticker-wrap">
      <div className="ticker-label">Our Programs</div>
      <div className="ticker-track-wrap">
        <div className="ticker">
          {doubleItems.map((item, index) => (
            <React.Fragment key={index}>
              <span className="ticker-item">
                <span className="ticker-sep"></span>
                {renderItemText(item)}
              </span>
              {index < doubleItems.length - 1 && <span className="ticker-divider"></span>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
