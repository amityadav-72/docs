import React from 'react';
import { leadershipRoles } from '../data/docsData';

export const LeadershipHierarchy = () => {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Core Team & Domain Governance</h1>
          <p className="page-desc">
            Defined role responsibilities, deliverables, and performance metrics for MSC PRPCEM executive leadership.
          </p>
        </div>
      </div>

      {/* College Advisory Board */}
      <div className="card" style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '15px', marginBottom: '8px' }}>College Institutional Advisory Board</h3>
        <p style={{ marginBottom: '12px', fontSize: '13px' }}>
          Official institutional mentors and approvers for all MSC PRPCEM activities:
        </p>

        <div className="grid-3" style={{ marginBottom: 0 }}>
          <div style={{ padding: '12px', background: '#f8fafc', border: '1px solid #e5e7eb', borderRadius: '4px' }}>
            <div style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 600 }}>Chief Patron</div>
            <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-main)', marginTop: '2px' }}>Principal, PRPCEM</div>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Institutional approvals & permissions</div>
          </div>

          <div style={{ padding: '12px', background: '#f8fafc', border: '1px solid #e5e7eb', borderRadius: '4px' }}>
            <div style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 600 }}>Department Mentor</div>
            <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-main)', marginTop: '2px' }}>Head of Department (CSE / IT)</div>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Lab allocations & student OD leave</div>
          </div>

          <div style={{ padding: '12px', background: '#f8fafc', border: '1px solid #e5e7eb', borderRadius: '4px' }}>
            <div style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 600 }}>Faculty In-Charge</div>
            <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-main)', marginTop: '2px' }}>Prof. Faculty Coordinator, MSC</div>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Direct club guidance & voucher clearance</div>
          </div>
        </div>
      </div>

      {/* Role Cards Grid */}
      <h2 style={{ fontSize: '16px', marginBottom: '12px' }}>Executive Team Roles</h2>
      <div className="grid-2">
        {leadershipRoles.map((roleItem, idx) => (
          <div key={idx} className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
              <div>
                <span style={{ fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>
                  {roleItem.domain}
                </span>
                <h3 style={{ fontSize: '16px', fontWeight: 600, marginTop: '2px' }}>
                  {roleItem.role}
                </h3>
              </div>
              <span style={{ fontSize: '11px', background: '#f3f4f6', color: '#374151', padding: '2px 8px', borderRadius: '4px', fontWeight: 600 }}>
                {roleItem.badge}
              </span>
            </div>

            <div style={{ marginBottom: '14px' }}>
              <div style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '6px' }}>
                Responsibilities:
              </div>
              <ul style={{ paddingLeft: '16px', display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '13px', color: 'var(--text-secondary)' }}>
                {roleItem.responsibilities.map((resp, rIdx) => (
                  <li key={rIdx}>{resp}</li>
                ))}
              </ul>
            </div>

            <div style={{ padding: '10px', background: '#f8fafc', border: '1px solid #e5e7eb', borderRadius: '4px' }}>
              <div style={{ fontSize: '11px', fontWeight: 600, color: '#0f172a', textTransform: 'uppercase', marginBottom: '4px' }}>
                Domain Success KPIs:
              </div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                {roleItem.kpis.join(' • ')}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
