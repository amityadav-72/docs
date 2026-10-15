import React from 'react';

export const ExecutiveOverview = ({ onNavigate, onSelectDoc }) => {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">MSC PRPCEM Documentation Repository</h1>
          <p className="page-desc">
            The official operational knowledge base, standard operating procedures (SOPs), technical standards, and administrative guidelines for Microsoft Student Club PRPCEM.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button onClick={() => onNavigate('letter-generator')} className="btn btn-primary">
            Create Permission Letter
          </button>
        </div>
      </div>

      {/* Scope Notice */}
      <div className="notice notice-info" style={{ marginBottom: '20px' }}>
        <strong>Internal Repository:</strong> This portal is strictly for authorized club members and core leads. It documents how tasks are executed, how college administrative permissions are secured, and how code is maintained.
      </div>

      {/* Metrics Grid */}
      <div className="grid-4">
        <div className="stat-box">
          <div className="stat-value">11 Sections</div>
          <div className="stat-label">Categorical Architecture</div>
        </div>
        <div className="stat-box">
          <div className="stat-value">14 SOPs</div>
          <div className="stat-label">14-Point Standard Procedures</div>
        </div>
        <div className="stat-box">
          <div className="stat-value">14 Policies</div>
          <div className="stat-label">9-Point Governance Policies</div>
        </div>
        <div className="stat-box">
          <div className="stat-value">22 Templates</div>
          <div className="stat-label">Standard Markdown Templates</div>
        </div>
      </div>

      {/* Primary Priority Documentation Documents */}
      <h2 style={{ fontSize: '16px', marginBottom: '12px' }}>High-Frequency Priority Procedures</h2>
      <div className="grid-2">
        <div 
          className="card" 
          style={{ cursor: 'pointer' }} 
          onClick={() => onSelectDoc ? onSelectDoc('SOP-14') : onNavigate('doc-reader')}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
            <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', background: '#0f172a', color: '#fff', padding: '1px 5px', borderRadius: '3px' }}>
              SOP-ADM-01
            </span>
            <span style={{ fontSize: '11px', color: '#16a34a', fontWeight: 600 }}>14-Point SOP</span>
          </div>
          <div className="card-title">Securing College Administrative Permissions</div>
          <p style={{ marginBottom: '10px' }}>
            Official steps for Principal approval letters, Department HoD NOCs, Central Lab allocations, and inward register stamping.
          </p>
          <span style={{ fontSize: '12px', fontWeight: 600, color: '#2563eb' }}>
            Read SOP Procedure →
          </span>
        </div>

        <div 
          className="card" 
          style={{ cursor: 'pointer' }} 
          onClick={() => onSelectDoc ? onSelectDoc('SOP-05') : onNavigate('doc-reader')}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
            <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', background: '#0f172a', color: '#fff', padding: '1px 5px', borderRadius: '3px' }}>
              SOP-EVT-01
            </span>
            <span style={{ fontSize: '11px', color: '#16a34a', fontWeight: 600 }}>14-Point SOP</span>
          </div>
          <div className="card-title">Planning and Preparing an On-Campus Workshop</div>
          <p style={{ marginBottom: '10px' }}>
            End-to-end 6-phase chronological lifecycle: T-30 ideation, T-14 permissions, T-7 promotions, D-day run-of-show, and T+3 wrap-up.
          </p>
          <span style={{ fontSize: '12px', fontWeight: 600, color: '#2563eb' }}>
            Read Workshop SOP →
          </span>
        </div>

        <div 
          className="card" 
          style={{ cursor: 'pointer' }} 
          onClick={() => onSelectDoc ? onSelectDoc('POL-01') : onNavigate('doc-reader')}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
            <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', background: '#0f172a', color: '#fff', padding: '1px 5px', borderRadius: '3px' }}>
              POL-GOV-01
            </span>
            <span style={{ fontSize: '11px', color: '#2563eb', fontWeight: 600 }}>9-Point Policy</span>
          </div>
          <div className="card-title">Club Member Code of Conduct</div>
          <p style={{ marginBottom: '10px' }}>
            Professional decorum, inclusive participation rules, anti-harassment standards, and disciplinary escalation protocols.
          </p>
          <span style={{ fontSize: '12px', fontWeight: 600, color: '#2563eb' }}>
            Read Code of Conduct →
          </span>
        </div>

        <div 
          className="card" 
          style={{ cursor: 'pointer' }} 
          onClick={() => onSelectDoc ? onSelectDoc('TECH-01') : onNavigate('doc-reader')}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
            <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', background: '#0f172a', color: '#fff', padding: '1px 5px', borderRadius: '3px' }}>
              TECH-01
            </span>
            <span style={{ fontSize: '11px', color: '#4b5563', fontWeight: 600 }}>Tech Baseline</span>
          </div>
          <div className="card-title">Development Environment Setup</div>
          <p style={{ marginBottom: '10px' }}>
            Node.js LTS, Python, Git configuration, Conventional Commits standard, and pull request verification rules.
          </p>
          <span style={{ fontSize: '12px', fontWeight: 600, color: '#2563eb' }}>
            Read Dev Baseline →
          </span>
        </div>
      </div>

      {/* Interactive Tools Quick Cards */}
      <h2 style={{ fontSize: '16px', marginBottom: '12px' }}>Interactive Operational Tools</h2>
      <div className="grid-2">
        <div className="card" style={{ cursor: 'pointer' }} onClick={() => onNavigate('letter-generator')}>
          <div className="card-title">Letter & Requisition Maker</div>
          <p style={{ marginBottom: '12px' }}>
            Generate standard typed permission letters for College Principal, HoD NOCs, Lab bookings, and Duty Leave (OD) attendance.
          </p>
          <span style={{ fontSize: '13px', fontWeight: 600, color: '#2563eb' }}>
            Open Letter Generator →
          </span>
        </div>

        <div className="card" style={{ cursor: 'pointer' }} onClick={() => onNavigate('checklist')}>
          <div className="card-title">Event Operations Checklist</div>
          <p style={{ marginBottom: '12px' }}>
            Track interactive checklist tasks across T-14 days pre-event preparation, D-Day stage flow, and post-event reporting.
          </p>
          <span style={{ fontSize: '13px', fontWeight: 600, color: '#2563eb' }}>
            Open Checklist Tracker →
          </span>
        </div>
      </div>

      {/* Annual Event Roadmap Table */}
      <div className="card" style={{ marginTop: '8px' }}>
        <h2 style={{ fontSize: '16px', marginBottom: '12px' }}>Annual Academic Event Roadmap</h2>
        <table className="simple-table">
          <thead>
            <tr>
              <th>Quarter</th>
              <th>Period</th>
              <th>Key Milestones</th>
              <th>Primary Lead</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Q1</strong></td>
              <td>August - September</td>
              <td>Club Induction, 1st Year Orientation, Git & GitHub Bootcamp, Azure credits activation</td>
              <td>President & Technical Lead</td>
            </tr>
            <tr>
              <td><strong>Q2</strong></td>
              <td>October - November</td>
              <td>Flagship Hands-on Workshop, Guest Speaker Expert Talk, Mini Hackathon</td>
              <td>Operations & Technical Lead</td>
            </tr>
            <tr>
              <td><strong>Q3</strong></td>
              <td>January - February</td>
              <td>Annual 24-Hour Hackathon (InnovateX), Sponsor onboarding, Inter-college outreach</td>
              <td>Full Core Team</td>
            </tr>
            <tr>
              <td><strong>Q4</strong></td>
              <td>March - April</td>
              <td>Annual General Meeting (AGM), Core recruitment interviews, Tenure Handover Memorandum</td>
              <td>President & Vice President</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
