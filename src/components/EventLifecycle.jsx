import React, { useState } from 'react';
import { eventLifecyclePhases } from '../data/docsData';

export const EventLifecycle = ({ onNavigate }) => {
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);
  const activePhase = eventLifecyclePhases[activePhaseIndex];

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Event Execution SOP (6 Phases)</h1>
          <p className="page-desc">
            Complete step-by-step operating procedure for organizing workshops, hackathons, and guest talks at PRPCEM.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button onClick={() => onNavigate('letter-generator')} className="btn">
            Create Letter
          </button>
          <button onClick={() => onNavigate('checklist')} className="btn btn-primary">
            Open Checklist
          </button>
        </div>
      </div>

      {/* Phase Navigation Tabs */}
      <div className="tabs-nav">
        {eventLifecyclePhases.map((phase, idx) => (
          <button
            key={phase.phaseId}
            onClick={() => setActivePhaseIndex(idx)}
            className={`tab-link ${activePhaseIndex === idx ? 'active' : ''}`}
          >
            <span>Phase {phase.phaseNumber}: {phase.title}</span>
          </button>
        ))}
      </div>

      {/* Active Phase Box */}
      <div className="card" style={{ marginBottom: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
          <span style={{ fontSize: '11px', background: '#eff6ff', color: '#1d4ed8', padding: '2px 8px', borderRadius: '4px', fontWeight: 600 }}>
            Timeframe: {activePhase.timeframe}
          </span>
          <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
            Phase {activePhase.phaseNumber} of 06
          </span>
        </div>
        <h2 style={{ fontSize: '18px', marginBottom: '6px' }}>{activePhase.title}</h2>
        <p style={{ fontSize: '13px' }}>{activePhase.summary}</p>
      </div>

      {/* Steps List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {activePhase.steps.map((step, sIdx) => (
          <div key={sIdx} className="card">
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <div style={{ 
                width: '24px', 
                height: '24px', 
                borderRadius: '50%', 
                background: '#f1f5f9', 
                color: '#0f172a', 
                fontSize: '12px', 
                fontWeight: 700, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                flexShrink: 0
              }}>
                {sIdx + 1}
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '15px', fontWeight: 600, marginBottom: '4px' }}>{step.title}</h3>
                <p style={{ fontSize: '13px', marginBottom: '8px' }}>{step.detail}</p>
                {step.tip && (
                  <div className="notice notice-info" style={{ margin: 0 }}>
                    <strong>Note:</strong> {step.tip}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Stepper Buttons */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '24px' }}>
        <button 
          onClick={() => setActivePhaseIndex(Math.max(0, activePhaseIndex - 1))}
          className="btn"
          disabled={activePhaseIndex === 0}
        >
          ← Previous Phase
        </button>
        <button 
          onClick={() => setActivePhaseIndex(Math.min(eventLifecyclePhases.length - 1, activePhaseIndex + 1))}
          className="btn btn-primary"
          disabled={activePhaseIndex === eventLifecyclePhases.length - 1}
        >
          Next Phase →
        </button>
      </div>
    </div>
  );
};
