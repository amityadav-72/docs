import React, { useState, useEffect } from 'react';
import { defaultChecklistItems } from '../data/checklistsData';

export const EventChecklist = ({ onNotify }) => {
  const STORAGE_KEY = 'msc_event_checklist_v1';
  
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return defaultChecklistItems.map(item => ({ ...item, completed: false }));
  });

  const [activeTab, setActiveTab] = useState('all');
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskPhase, setNewTaskPhase] = useState('pre');

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const toggleItem = (id) => {
    setItems(prev => prev.map(item => {
      if (item.id === id) {
        const nextState = !item.completed;
        if (nextState && onNotify) onNotify(`Checked task: ${item.title.slice(0, 30)}...`);
        return { ...item, completed: nextState };
      }
      return item;
    }));
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;

    const newItem = {
      id: `custom-${Date.now()}`,
      phase: newTaskPhase,
      phaseLabel: newTaskPhase === 'pre' ? 'Pre-Event' : newTaskPhase === 'dday' ? 'D-Day' : 'Post-Event',
      category: "Custom",
      title: newTaskTitle.trim(),
      desc: "Custom task item added by organizer.",
      urgent: false,
      completed: false
    };

    setItems([newItem, ...items]);
    setNewTaskTitle('');
    if (onNotify) onNotify("Task added to checklist");
  };

  const resetAll = () => {
    if (window.confirm("Reset all tasks to uncompleted?")) {
      const resetItems = defaultChecklistItems.map(item => ({ ...item, completed: false }));
      setItems(resetItems);
      if (onNotify) onNotify("Checklist reset");
    }
  };

  const filteredItems = items.filter(item => {
    if (activeTab === 'all') return true;
    return item.phase === activeTab;
  });

  const totalCount = items.length;
  const completedCount = items.filter(i => i.completed).length;
  const percentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Event Operations Checklist</h1>
          <p className="page-desc">
            Operational task list for President and domain leads across Pre-Event (T-14), D-Day, and Post-Event wrap-up.
          </p>
        </div>
        <div>
          <button onClick={resetAll} className="btn">
            Reset Tasks
          </button>
        </div>
      </div>

      {/* Progress Box */}
      <div className="card" style={{ padding: '16px', marginBottom: '16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600 }}>
            Progress: {completedCount} of {totalCount} completed ({percentage}%)
          </div>
          <span style={{ fontSize: '12px', fontWeight: 600, color: percentage === 100 ? '#16a34a' : '#2563eb' }}>
            {percentage === 100 ? 'All Completed' : 'In Progress'}
          </span>
        </div>
        <div style={{ width: '100%', height: '6px', background: '#e5e7eb', borderRadius: '3px', overflow: 'hidden' }}>
          <div 
            style={{ 
              width: `${percentage}%`, 
              height: '100%', 
              background: '#0f172a',
              transition: 'width 0.2s'
            }} 
          />
        </div>
      </div>

      {/* Add Task Form */}
      <form onSubmit={handleAddTask} className="card" style={{ padding: '12px', marginBottom: '16px' }}>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <input 
            type="text" 
            placeholder="Add new checklist task..."
            className="form-input"
            style={{ flex: 1, minWidth: '220px' }}
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
          />
          <select 
            className="form-select"
            style={{ width: 'auto' }}
            value={newTaskPhase}
            onChange={(e) => setNewTaskPhase(e.target.value)}
          >
            <option value="pre">Pre-Event (T-14)</option>
            <option value="dday">D-Day Execution</option>
            <option value="post">Post-Event Wrap</option>
          </select>
          <button type="submit" className="btn btn-primary">
            Add Task
          </button>
        </div>
      </form>

      {/* Filter Tabs */}
      <div className="tabs-nav">
        <button 
          onClick={() => setActiveTab('all')}
          className={`tab-link ${activeTab === 'all' ? 'active' : ''}`}
        >
          All ({items.length})
        </button>
        <button 
          onClick={() => setActiveTab('pre')}
          className={`tab-link ${activeTab === 'pre' ? 'active' : ''}`}
        >
          Pre-Event T-14 ({items.filter(i => i.phase === 'pre').length})
        </button>
        <button 
          onClick={() => setActiveTab('dday')}
          className={`tab-link ${activeTab === 'dday' ? 'active' : ''}`}
        >
          D-Day Stage Flow ({items.filter(i => i.phase === 'dday').length})
        </button>
        <button 
          onClick={() => setActiveTab('post')}
          className={`tab-link ${activeTab === 'post' ? 'active' : ''}`}
        >
          Post-Event Wrap ({items.filter(i => i.phase === 'post').length})
        </button>
      </div>

      {/* Tasks List */}
      <div className="card" style={{ padding: 0 }}>
        {filteredItems.map(item => (
          <div 
            key={item.id} 
            className="task-row"
            onClick={() => toggleItem(item.id)}
          >
            <input 
              type="checkbox" 
              checked={item.completed} 
              onChange={() => {}} 
              className="task-checkbox"
            />
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className={`task-title ${item.completed ? 'done' : ''}`}>
                  {item.title}
                </span>
                {item.urgent && (
                  <span style={{ fontSize: '10px', background: '#fee2e2', color: '#b91c1c', padding: '1px 5px', borderRadius: '3px', fontWeight: 600 }}>
                    URGENT
                  </span>
                )}
              </div>
              <div className="task-desc">{item.desc}</div>
            </div>
            <span style={{ fontSize: '11px', background: '#f3f4f6', color: '#4b5563', padding: '2px 6px', borderRadius: '4px' }}>
              {item.category}
            </span>
          </div>
        ))}

        {filteredItems.length === 0 && (
          <div style={{ padding: '24px', textAlign: 'center', color: 'var(--text-muted)' }}>
            No tasks found in this section.
          </div>
        )}
      </div>
    </div>
  );
};
