import React from 'react';
import { contingencyProtocols } from '../data/docsData';

export const CrisisContingency = () => {
  const emergencyContacts = [
    { role: "Central Computer Center Admin", desk: "Lab 01 Ground Floor", contact: "Ext: 204 / Intercom" },
    { role: "College Electrical & Generator Lead", desk: "Substation Block", contact: "Ext: 112 / Intercom" },
    { role: "Audio-Visual / Projector Technician", desk: "Auditorium Control Room", contact: "Ext: 180 / Intercom" },
    { role: "College Main Security Gate", desk: "Entrance Gate 1", contact: "Ext: 101 / Intercom" },
    { role: "Faculty Advisor Direct", desk: "CSE Dept Cabin 4", contact: "+91 98XXX XXXXX" }
  ];

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Contingency & Emergency Protocols</h1>
          <p className="page-desc">
            Standard action procedures during technical failures, speaker delays, equipment breakdowns, or crowd surges.
          </p>
        </div>
      </div>

      <div className="notice notice-warning" style={{ marginBottom: '20px' }}>
        <strong>Stage Etiquette Rule:</strong> If an unforeseen glitch occurs, the President and anchors must maintain composure on stage. Never broadcast panic. Say: <em>"We are taking a brief 2-minute technical pause while our display calibrates."</em>
      </div>

      {/* Protocols */}
      <h2 style={{ fontSize: '16px', marginBottom: '12px' }}>Emergency Action Plans</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
        {contingencyProtocols.map((item, idx) => (
          <div key={idx} className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <h3 style={{ fontSize: '15px', fontWeight: 600 }}>{item.issue}</h3>
              <span style={{ 
                fontSize: '11px', 
                fontWeight: 600, 
                padding: '2px 6px', 
                borderRadius: '4px',
                background: item.severity === 'Critical' ? '#fee2e2' : '#fef3c7',
                color: item.severity === 'Critical' ? '#991b1b' : '#92400e'
              }}>
                {item.severity}
              </span>
            </div>
            <div style={{ padding: '10px 12px', background: '#f8fafc', border: '1px solid #e5e7eb', borderRadius: '4px', fontSize: '13px', color: 'var(--text-secondary)' }}>
              <strong>Action Protocol:</strong> {item.action}
            </div>
          </div>
        ))}
      </div>

      {/* Campus Emergency Numbers */}
      <h2 style={{ fontSize: '16px', marginBottom: '12px' }}>Campus Support Intercom Directory</h2>
      <div className="card" style={{ padding: 0 }}>
        <table className="simple-table">
          <thead>
            <tr>
              <th>Department / Role</th>
              <th>Location</th>
              <th>Intercom / Phone</th>
            </tr>
          </thead>
          <tbody>
            {emergencyContacts.map((c, i) => (
              <tr key={i}>
                <td><strong>{c.role}</strong></td>
                <td>{c.desk}</td>
                <td style={{ fontFamily: 'var(--font-mono)' }}>{c.contact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
