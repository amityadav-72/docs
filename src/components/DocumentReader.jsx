import React, { useState } from 'react';

export const DocumentReader = ({ doc, onNavigate, onNotify }) => {
  const [copied, setCopied] = useState(false);

  if (!doc) {
    return (
      <div className="card" style={{ padding: '32px', textAlign: 'center' }}>
        <h2>Document Not Found</h2>
        <p style={{ marginTop: '8px' }}>The requested document could not be located in the repository.</p>
      </div>
    );
  }

  const handleCopyMarkdown = () => {
    navigator.clipboard.writeText(doc.content);
    setCopied(true);
    if (onNotify) onNotify("Document markdown copied");
    setTimeout(() => setCopied(false), 2000);
  };

  // Extract headings for Table of Contents
  const headings = doc.content
    ? doc.content
        .split('\n')
        .filter(line => line.startsWith('## '))
        .map(line => line.replace('## ', '').trim())
    : [];

  return (
    <div>
      {/* Archive Warning Banner */}
      {doc.status === 'Archived' && (
        <div className="notice notice-warning" style={{ marginBottom: '16px' }}>
          <strong>Historical Document:</strong> This document is archived and preserved for historical audit only. It does not represent current active club operating procedures.
        </div>
      )}

      {/* Document Header */}
      <div className="page-header">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
            <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', background: '#0f172a', color: '#ffffff', padding: '2px 6px', borderRadius: '4px', fontWeight: 700 }}>
              {doc.id}
            </span>
            <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
              {doc.section}
            </span>
            <span style={{ 
              fontSize: '11px', 
              padding: '1px 6px', 
              borderRadius: '4px', 
              fontWeight: 600,
              background: doc.status === 'Published' ? '#eff6ff' : doc.status === 'Archived' ? '#f3f4f6' : '#fef3c7',
              color: doc.status === 'Published' ? '#1d4ed8' : doc.status === 'Archived' ? '#4b5563' : '#92400e'
            }}>
              {doc.status}
            </span>
            <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
              v{doc.version || '1.0.0'}
            </span>
          </div>

          <h1 className="page-title">{doc.title}</h1>
          <p className="page-desc">{doc.summary}</p>
        </div>

        <div style={{ display: 'flex', gap: '8px' }}>
          <button onClick={handleCopyMarkdown} className="btn btn-sm">
            {copied ? 'Copied' : 'Copy Markdown'}
          </button>
        </div>
      </div>

      {/* Metadata Overview Row */}
      <div className="card" style={{ padding: '12px 16px', marginBottom: '20px', background: '#f8fafc', border: '1px solid #e5e7eb' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', fontSize: '12px', color: 'var(--text-secondary)' }}>
          <div>
            <strong>Document Owner:</strong> {doc.owner}
          </div>
          <div>
            <strong>Last Reviewed:</strong> {doc.lastReviewed || '2026-10-15'}
          </div>
          <div>
            <strong>Canonical Identifier:</strong> <code style={{ fontFamily: 'var(--font-mono)' }}>{doc.sopId || doc.policyId || doc.id}</code>
          </div>
        </div>
      </div>

      {/* Two Column Layout: Main Content + Table of Contents */}
      <div style={{ display: 'grid', gridTemplateColumns: headings.length > 0 ? '1fr 220px' : '1fr', gap: '24px', alignItems: 'start' }}>
        {/* Main Document Body */}
        <div className="card" style={{ padding: '24px', lineHeight: 1.7 }}>
          <div style={{ 
            fontSize: '14px', 
            color: 'var(--text-secondary)',
            whiteSpace: 'pre-wrap', 
            wordBreak: 'break-word',
            fontFamily: 'inherit'
          }}>
            {doc.content}
          </div>
        </div>

        {/* Table of Contents Column */}
        {headings.length > 0 && (
          <div className="card" style={{ padding: '16px', position: 'sticky', top: '70px' }}>
            <div style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '8px', letterSpacing: '0.04em' }}>
              On This Page
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '12px' }}>
              {headings.map((h, i) => (
                <li key={i}>
                  <a href={`#heading-${i}`} style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
                    {h}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
