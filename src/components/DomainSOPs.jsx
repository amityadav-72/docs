import React, { useState } from 'react';
import { domainSOPs } from '../data/docsData';

export const DomainSOPs = () => {
  const [selectedDomainIndex, setSelectedDomainIndex] = useState(0);
  const currentDomain = domainSOPs[selectedDomainIndex];

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Domain-Wise Standard Operating Procedures</h1>
          <p className="page-desc">
            Execution rules and guidelines for Technical, Design, PR/Marketing, and Event Operations teams.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="tabs-nav">
        {domainSOPs.map((domain, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedDomainIndex(idx)}
            className={`tab-link ${selectedDomainIndex === idx ? 'active' : ''}`}
          >
            {domain.domain}
          </button>
        ))}
      </div>

      {/* SOPs */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {currentDomain.sopList.map((sop, sIdx) => (
          <div key={sIdx} className="card">
            <h3 style={{ fontSize: '15px', fontWeight: 600, marginBottom: '12px' }}>
              {sop.title}
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {sop.rules.map((rule, rIdx) => (
                <div 
                  key={rIdx}
                  style={{ 
                    display: 'flex', 
                    alignItems: 'flex-start', 
                    gap: '10px', 
                    padding: '8px 12px', 
                    background: '#f8fafc', 
                    border: '1px solid #e5e7eb', 
                    borderRadius: '4px' 
                  }}
                >
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#0f172a' }}>
                    {rIdx + 1}.
                  </span>
                  <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                    {rule}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
