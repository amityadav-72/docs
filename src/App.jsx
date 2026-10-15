import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { DocumentReader } from './components/DocumentReader';
import { ExecutiveOverview } from './components/ExecutiveOverview';
import { LetterGenerator } from './components/LetterGenerator';
import { EventChecklist } from './components/EventChecklist';
import { BudgetCalculator } from './components/BudgetCalculator';
import { AnchoringPrompter } from './components/AnchoringPrompter';
import { allDocuments, getDocumentById } from './docs';

export function App() {
  const [activeSection, setActiveSection] = useState('overview');
  const [activeDocId, setActiveDocId] = useState('GS-01');
  const [searchQuery, setSearchQuery] = useState('');
  const [notification, setNotification] = useState(null);

  const showNotification = (msg) => {
    setNotification(msg);
    setTimeout(() => {
      setNotification(null);
    }, 2400);
  };

  // Filter documents across all 11 sections
  const searchResults = searchQuery.trim() 
    ? allDocuments.filter(d => 
        d.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        d.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (d.summary && d.summary.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (d.content && d.content.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : [];

  const handleSearchResultClick = (docId) => {
    setActiveDocId(docId);
    setActiveSection('doc-reader');
    setSearchQuery('');
  };

  return (
    <div className="app-layout">
      {/* Hierarchical Sidebar */}
      <Sidebar 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        activeDocId={activeDocId}
        setActiveDocId={setActiveDocId}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Main Reading and Tool Area */}
      <div className="main-wrapper">
        <Header 
          activeSection={activeSection}
          activeDocId={activeDocId}
          onNavigate={(sec) => {
            setActiveSection(sec);
            setActiveDocId(null);
          }}
        />

        <main className="content-body">
          {/* Active Search Results View */}
          {searchQuery.trim() !== '' ? (
            <div className="card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', borderBottom: '1px solid #e5e7eb', paddingBottom: '8px' }}>
                <span style={{ fontWeight: 600, fontSize: '14px' }}>
                  Search Results for "{searchQuery}" ({searchResults.length} found)
                </span>
                <button onClick={() => setSearchQuery('')} className="btn btn-sm">
                  Clear Search
                </button>
              </div>

              {searchResults.length > 0 ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {searchResults.map((result) => (
                    <div 
                      key={result.id}
                      onClick={() => handleSearchResultClick(result.id)}
                      className="task-row"
                      style={{ borderRadius: '4px' }}
                    >
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '2px' }}>
                          <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', background: '#0f172a', color: '#fff', padding: '1px 5px', borderRadius: '3px' }}>
                            {result.id}
                          </span>
                          <span style={{ fontWeight: 600, color: 'var(--text-main)', fontSize: '13px' }}>
                            {result.title}
                          </span>
                          <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                            ({result.section})
                          </span>
                        </div>
                        <div style={{ color: 'var(--text-secondary)', fontSize: '12px' }}>
                          {result.summary}
                        </div>
                      </div>
                      <span style={{ fontSize: '12px', color: '#2563eb', fontWeight: 600 }}>
                        Read Document →
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <div style={{ padding: '24px', textAlign: 'center', color: 'var(--text-muted)' }}>
                  No matching documentation found for "{searchQuery}".
                </div>
              )}
            </div>
          ) : (
            /* Active Selected View */
            <>
              {activeSection === 'overview' && (
                <ExecutiveOverview 
                  onNavigate={setActiveSection} 
                  onSelectDoc={(docId) => {
                    setActiveDocId(docId);
                    setActiveSection('doc-reader');
                  }} 
                />
              )}

              {activeSection === 'doc-reader' && (
                <DocumentReader 
                  doc={getDocumentById(activeDocId) || allDocuments[0]} 
                  onNavigate={setActiveSection}
                  onNotify={showNotification}
                />
              )}

              {activeSection === 'letter-generator' && (
                <LetterGenerator onNotify={showNotification} />
              )}

              {activeSection === 'checklist' && (
                <EventChecklist onNotify={showNotification} />
              )}

              {activeSection === 'budget' && (
                <BudgetCalculator onNotify={showNotification} />
              )}

              {activeSection === 'anchoring' && (
                <AnchoringPrompter onNotify={showNotification} />
              )}
            </>
          )}
        </main>
      </div>

      {/* Action Notification Toast */}
      {notification && (
        <div className="notify-pill">
          {notification}
        </div>
      )}
    </div>
  );
}

export default App;
