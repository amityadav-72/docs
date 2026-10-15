import React from 'react';
import { getDocumentById } from '../docs';

export const Header = ({ activeSection, activeDocId, onNavigate }) => {
  const getBreadcrumbs = () => {
    if (activeSection === 'doc-reader' && activeDocId) {
      const doc = getDocumentById(activeDocId);
      if (doc) {
        return [doc.section, `${doc.id}: ${doc.title}`];
      }
    }

    switch (activeSection) {
      case 'overview': return ['Executive', 'Documentation Portal Dashboard'];
      case 'letter-generator': return ['Tools', 'Letter & Requisition Maker'];
      case 'checklist': return ['Tools', 'Event Checklist Tracker'];
      case 'budget': return ['Tools', 'Budget & Expense Ledger'];
      case 'anchoring': return ['Tools', 'Stage Anchoring Prompter'];
      default: return ['Portal', 'Documentation'];
    }
  };

  const breadcrumbs = getBreadcrumbs();

  return (
    <header className="topbar">
      <div className="topbar-breadcrumbs">
        <span>docs.mscprpcem.tech</span>
        <span>/</span>
        <span>{breadcrumbs[0]}</span>
        <span>/</span>
        <span className="active">{breadcrumbs[1]}</span>
      </div>

      <div className="topbar-right">
        <button 
          onClick={() => onNavigate('letter-generator')}
          className="btn btn-sm"
        >
          New Letter
        </button>

        <button 
          onClick={() => onNavigate('checklist')}
          className="btn btn-sm"
        >
          Checklist
        </button>

        <button 
          onClick={() => onNavigate('budget')}
          className="btn btn-sm"
        >
          Budget
        </button>
      </div>
    </header>
  );
};
