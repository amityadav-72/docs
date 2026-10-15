import React, { useState } from 'react';
import { letterTemplates } from '../data/templatesData';

export const LetterGenerator = ({ onNotify }) => {
  const [selectedTemplateId, setSelectedTemplateId] = useState(letterTemplates[0].id);
  const currentTemplate = letterTemplates.find(t => t.id === selectedTemplateId) || letterTemplates[0];

  const [formData, setFormData] = useState({ ...currentTemplate.defaultFields });
  const [copied, setCopied] = useState(false);

  const handleTemplateChange = (e) => {
    const newId = e.target.value;
    setSelectedTemplateId(newId);
    const tmpl = letterTemplates.find(t => t.id === newId);
    if (tmpl) {
      setFormData({ ...tmpl.defaultFields });
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const generatedLetter = currentTemplate.generateContent(formData);

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedLetter);
    setCopied(true);
    if (onNotify) onNotify("Letter copied to clipboard");
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleReset = () => {
    setFormData({ ...currentTemplate.defaultFields });
    if (onNotify) onNotify("Reset fields to default");
  };

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Letter & Requisition Maker</h1>
          <p className="page-desc">
            Generate standard formatted letters for Principal permissions, Lab allocations, OD attendance, and Speaker invitations.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button onClick={handleReset} className="btn">
            Reset
          </button>
          <button onClick={handleCopy} className="btn">
            {copied ? 'Copied' : 'Copy Text'}
          </button>
          <button onClick={handlePrint} className="btn btn-primary">
            Print / Save as PDF
          </button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '360px 1fr', gap: '24px', alignItems: 'start' }}>
        {/* Input Controls */}
        <div className="card form-column" style={{ padding: '16px' }}>
          <div className="form-group">
            <label className="form-label">Select Letter Template</label>
            <select 
              className="form-select"
              value={selectedTemplateId}
              onChange={handleTemplateChange}
            >
              {letterTemplates.map(tmpl => (
                <option key={tmpl.id} value={tmpl.id}>
                  {tmpl.name}
                </option>
              ))}
            </select>
          </div>

          <div className="notice notice-info">
            {currentTemplate.description}
          </div>

          <div className="form-group">
            <label className="form-label">Event / Activity Title</label>
            <input 
              type="text" 
              className="form-input"
              value={formData.eventTitle || ''}
              onChange={(e) => handleInputChange('eventTitle', e.target.value)}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            <div className="form-group">
              <label className="form-label">Event Date</label>
              <input 
                type="text" 
                className="form-input"
                value={formData.eventDate || ''}
                onChange={(e) => handleInputChange('eventDate', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Timing</label>
              <input 
                type="text" 
                className="form-input"
                value={formData.eventTime || ''}
                onChange={(e) => handleInputChange('eventTime', e.target.value)}
              />
            </div>
          </div>

          {formData.venue !== undefined && (
            <div className="form-group">
              <label className="form-label">Venue / Hall Proposed</label>
              <input 
                type="text" 
                className="form-input"
                value={formData.venue || ''}
                onChange={(e) => handleInputChange('venue', e.target.value)}
              />
            </div>
          )}

          {formData.labName !== undefined && (
            <div className="form-group">
              <label className="form-label">Lab Name</label>
              <input 
                type="text" 
                className="form-input"
                value={formData.labName || ''}
                onChange={(e) => handleInputChange('labName', e.target.value)}
              />
            </div>
          )}

          {formData.speakerName !== undefined && (
            <div className="form-group">
              <label className="form-label">Resource Person / Speaker</label>
              <input 
                type="text" 
                className="form-input"
                value={formData.speakerName || ''}
                onChange={(e) => handleInputChange('speakerName', e.target.value)}
              />
            </div>
          )}

          {formData.expectedAttendees !== undefined && (
            <div className="form-group">
              <label className="form-label">Expected Attendees Count</label>
              <input 
                type="text" 
                className="form-input"
                value={formData.expectedAttendees || ''}
                onChange={(e) => handleInputChange('expectedAttendees', e.target.value)}
              />
            </div>
          )}

          {formData.objective !== undefined && (
            <div className="form-group">
              <label className="form-label">Objective & Learning Outcomes</label>
              <textarea 
                rows={3}
                className="form-textarea"
                value={formData.objective || ''}
                onChange={(e) => handleInputChange('objective', e.target.value)}
              />
            </div>
          )}

          {formData.softwareRequired !== undefined && (
            <div className="form-group">
              <label className="form-label">Software / Packages Required</label>
              <textarea 
                rows={2}
                className="form-textarea"
                value={formData.softwareRequired || ''}
                onChange={(e) => handleInputChange('softwareRequired', e.target.value)}
              />
            </div>
          )}

          <div className="form-group">
            <label className="form-label">Faculty Advisor Signatory</label>
            <input 
              type="text" 
              className="form-input"
              value={formData.facultyAdvisor || ''}
              onChange={(e) => handleInputChange('facultyAdvisor', e.target.value)}
            />
          </div>
        </div>

        {/* Letter Preview Sheet */}
        <div className="letter-box">
          <div className="letter-head">
            <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#4b5563' }}>
              P. R. Pote Patil Institute of Higher Education & Research
            </div>
            <div className="letter-college">
              P. R. Pote (Patil) College of Engineering & Management, Amravati
            </div>
            <div style={{ fontSize: '12px', color: '#4b5563', marginTop: '2px' }}>
              Approved by AICTE New Delhi, Affiliated to SGBAU Amravati | NAAC 'A+' Accredited
            </div>
            <div className="letter-club">
              MICROSOFT STUDENT CLUB (MSC PRPCEM)
            </div>
          </div>

          <div className="letter-meta">
            <span>Ref No: MSC/PRPCEM/2026/DOC-{selectedTemplateId.toUpperCase().slice(0, 4)}</span>
            <span>Date: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
          </div>

          <div className="letter-text">
            {generatedLetter}
          </div>
        </div>
      </div>
    </div>
  );
};
