import React, { useState } from 'react';
import { docCategories } from '../docs';

export const Sidebar = ({ 
  activeSection, 
  setActiveSection, 
  activeDocId, 
  setActiveDocId, 
  searchQuery, 
  setSearchQuery 
}) => {
  // Keep track of which categories are open
  const [openCategories, setOpenCategories] = useState({
    "01-getting-started": true,
    "02-club-documentation": true,
    "07-sops": true,
    "tools": true
  });

  const toggleCategory = (catId) => {
    setOpenCategories(prev => ({
      ...prev,
      [catId]: !prev[catId]
    }));
  };

  const handleSelectDoc = (doc) => {
    setActiveDocId(doc.id);
    setActiveSection('doc-reader');
  };

  const handleSelectTool = (toolId) => {
    setActiveDocId(null);
    setActiveSection(toolId);
  };

  const tools = [
    { id: "letter-generator", label: "Letter & Requisition Maker", tag: "Interactive" },
    { id: "checklist", label: "Event Checklist Tracker", tag: "Live" },
    { id: "budget", label: "Budget & Expense Ledger", tag: "Calc" },
    { id: "anchoring", label: "Stage Anchoring Prompter", tag: "Stage" },
  ];

  return (
    <aside className="sidebar">
      {/* Brand Header */}
      <div className="sidebar-header">
        <div>
          <div className="brand-title">MSC PRPCEM</div>
          <div className="brand-sub">docs.mscprpcem.tech</div>
        </div>
      </div>

      {/* Global Search */}
      <div className="sidebar-search-box">
        <div className="search-input-wrapper">
          <input 
            type="text" 
            placeholder="Search all 11 sections..." 
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Navigation Tree */}
      <nav className="sidebar-nav">
        {/* Executive Overview Jump */}
        <div>
          <button
            onClick={() => { setActiveSection('overview'); setActiveDocId(null); }}
            className={`nav-item-btn ${activeSection === 'overview' ? 'active' : ''}`}
            style={{ fontWeight: 600 }}
          >
            <span>Overview & Dashboard</span>
            <span className="nav-tag">Home</span>
          </button>
        </div>

        {/* Interactive Admin Tools Category */}
        <div>
          <div 
            className="nav-group-title" 
            onClick={() => toggleCategory('tools')}
            style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between' }}
          >
            <span>Interactive Tools</span>
            <span>{openCategories['tools'] ? '−' : '+'}</span>
          </div>

          {openCategories['tools'] && (
            <div className="nav-group-items">
              {tools.map(tool => (
                <button
                  key={tool.id}
                  onClick={() => handleSelectTool(tool.id)}
                  className={`nav-item-btn ${activeSection === tool.id ? 'active' : ''}`}
                >
                  <span>{tool.label}</span>
                  <span className="nav-tag">{tool.tag}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* 11 Documentation Categories */}
        {docCategories.map(cat => {
          const isOpen = openCategories[cat.id];
          return (
            <div key={cat.id}>
              <div 
                className="nav-group-title" 
                onClick={() => toggleCategory(cat.id)}
                style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', userSelect: 'none' }}
              >
                <span>{cat.name}</span>
                <span>{isOpen ? '−' : '+'}</span>
              </div>

              {isOpen && (
                <div className="nav-group-items">
                  {cat.docs.map(doc => {
                    const isSelected = activeSection === 'doc-reader' && activeDocId === doc.id;
                    return (
                      <button
                        key={doc.id}
                        onClick={() => handleSelectDoc(doc)}
                        className={`nav-item-btn ${isSelected ? 'active' : ''}`}
                        title={doc.title}
                      >
                        <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', marginRight: '6px' }}>
                          {doc.id}: {doc.title}
                        </span>
                        <span style={{ fontSize: '10px', color: 'var(--text-muted)' }}>
                          {doc.status === 'Archived' ? 'Arc' : ''}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}

        <div style={{ marginTop: 'auto', paddingTop: '16px' }}>
          <div className="nav-group-title">External Links</div>
          <a 
            href="https://mscprpcem.tech" 
            target="_blank" 
            rel="noreferrer" 
            className="nav-item-btn"
          >
            <span>Main Club Website</span>
            <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>↗</span>
          </a>
        </div>
      </nav>

      {/* Footer */}
      <div className="sidebar-footer">
        <div>Authorized Members Only • v1.0.0</div>
      </div>
    </aside>
  );
};
