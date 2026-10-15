import React, { useState } from 'react';
import { handoverChecklist } from '../data/docsData';

export const HandoverGuide = ({ onNotify }) => {
  const [copied, setCopied] = useState(false);

  const memorandumText = `OFFICIAL TENURE HANDOVER MEMORANDUM
MICROSOFT STUDENT CLUB (MSC PRPCEM)
P. R. Pote (Patil) College of Engineering & Management, Amravati

Date of Handover: 30th April 2026
Tenure Term: 2025-2026 to 2026-2027

We, the undersigned Outgoing Executive Committee and Incoming Executive Committee of MSC PRPCEM, hereby certify that a complete transition of all club responsibilities, digital assets, documentation archives, and financial accounts has been executed in the presence of our Faculty Advisor.

TRANSFERRED ASSETS & ACCESS PRIVILEGES:
1. Domain DNS & Cloud Infrastructure (docs.mscprpcem.tech, mscprpcem.tech, Cloudflare, Azure Credits)
2. GitHub Organization Owner Rights (github.com/mscprpcem)
3. Social Media & Community Channels (LinkedIn, Instagram @mscprpcem, WhatsApp Official Community)
4. Administrative Document Binder (Physical inward-stamped approval letters & event reports)
5. Financial Ledger & Audited Receipts (Zero unaccounted balance, verified bank summary)

___________________________             ___________________________
Outgoing President                      Incoming President
Name: ____________________             Name: ____________________
Roll No: __________________             Roll No: __________________

Attested & Approved by:

___________________________
Prof. S. R. Sharma
Faculty Advisor, MSC PRPCEM`;

  const copyMemorandum = () => {
    navigator.clipboard.writeText(memorandumText);
    setCopied(true);
    if (onNotify) onNotify("Handover Memorandum copied");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Tenure Handover & Succession Manual</h1>
          <p className="page-desc">
            Governance manual for transitioning digital credentials, domains, archives, and financial ledgers to incoming leadership.
          </p>
        </div>
        <button onClick={copyMemorandum} className="btn btn-primary">
          {copied ? 'Copied' : 'Copy Memorandum'}
        </button>
      </div>

      {/* Asset Categories Grid */}
      <h2 style={{ fontSize: '16px', marginBottom: '12px' }}>Transition Checklist by Domain</h2>
      <div className="grid-2" style={{ marginBottom: '24px' }}>
        {handoverChecklist.map((cat, idx) => (
          <div key={idx} className="card">
            <h3 style={{ fontSize: '15px', fontWeight: 600, marginBottom: '10px' }}>
              {cat.category}
            </h3>
            <ul style={{ paddingLeft: '16px', display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '13px', color: 'var(--text-secondary)' }}>
              {cat.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Memorandum Box */}
      <div className="card">
        <h3 style={{ fontSize: '15px', fontWeight: 600, marginBottom: '8px' }}>
          Official Handover Memorandum Document
        </h3>
        <p style={{ fontSize: '13px', marginBottom: '12px' }}>
          Print or copy this text to stamp and sign at the year-end Annual General Meeting (AGM):
        </p>
        <pre style={{ 
          background: '#f8fafc', 
          padding: '16px', 
          border: '1px solid #e5e7eb', 
          borderRadius: '4px', 
          fontFamily: 'var(--font-mono)', 
          fontSize: '12px', 
          lineHeight: 1.6, 
          color: '#111827',
          whiteSpace: 'pre-wrap'
        }}>
          {memorandumText}
        </pre>
      </div>
    </div>
  );
};
