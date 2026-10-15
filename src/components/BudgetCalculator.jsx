import React, { useState } from 'react';

export const BudgetCalculator = ({ onNotify }) => {
  const initialItems = [
    { id: 1, category: "Marketing & Flex", item: "Stage Backdrop Banner (8x4 ft)", quantity: 1, unitCost: 800 },
    { id: 2, category: "Marketing & Flex", item: "Auditorium Entrance Standee Flex", quantity: 2, unitCost: 450 },
    { id: 3, category: "Hospitality & Guest", item: "Guest Memento / Floral Sapling", quantity: 1, unitCost: 650 },
    { id: 4, category: "Hospitality & Guest", item: "Guest Travel & Conveyance", quantity: 1, unitCost: 1500 },
    { id: 5, category: "Refreshments", item: "High-Tea & Snacks for Dignitaries", quantity: 10, unitCost: 65 },
    { id: 6, category: "Refreshments", item: "Refreshment Tea/Biscuits for Attendees", quantity: 120, unitCost: 20 },
    { id: 7, category: "Certificates & Badges", item: "Printed Certificates (Glossy 250 GSM)", quantity: 130, unitCost: 12 },
    { id: 8, category: "Certificates & Badges", item: "Volunteer ID Cards with Lanyards", quantity: 20, unitCost: 25 },
    { id: 9, category: "Swag & Prizes", item: "Stickers & Participant Badges", quantity: 100, unitCost: 8 },
    { id: 10, category: "Contingency", item: "Emergency / AV Backup Expenses", quantity: 1, unitCost: 500 }
  ];

  const [items, setItems] = useState(initialItems);
  const [attendeesCount, setAttendeesCount] = useState(120);
  const [copied, setCopied] = useState(false);

  const [newItem, setNewItem] = useState({
    category: "Logistics",
    item: "",
    quantity: 1,
    unitCost: 100
  });

  const totalBudget = items.reduce((sum, i) => sum + (Number(i.quantity) * Number(i.unitCost)), 0);
  const costPerHead = attendeesCount > 0 ? (totalBudget / attendeesCount).toFixed(2) : 0;

  const handleUpdate = (id, field, value) => {
    setItems(prev => prev.map(item => {
      if (item.id === id) {
        return { ...item, [field]: value };
      }
      return item;
    }));
  };

  const handleDelete = (id) => {
    setItems(prev => prev.filter(item => item.id !== id));
    if (onNotify) onNotify("Line item deleted");
  };

  const handleAddItem = (e) => {
    e.preventDefault();
    if (!newItem.item.trim()) return;

    setItems([...items, { ...newItem, id: Date.now() }]);
    setNewItem({
      category: "Logistics",
      item: "",
      quantity: 1,
      unitCost: 100
    });
    if (onNotify) onNotify("Budget line item added");
  };

  const exportSummary = () => {
    let summaryText = `MSC PRPCEM - EVENT BUDGET ESTIMATE\n`;
    summaryText += `Projected Attendees: ${attendeesCount}\n`;
    summaryText += `Total Estimated Budget: ₹${totalBudget.toLocaleString('en-IN')}\n`;
    summaryText += `Cost Per Attendee: ₹${costPerHead}\n\n`;
    summaryText += `ITEMIZED BREAKDOWN:\n`;
    items.forEach((item, index) => {
      const lineTotal = item.quantity * item.unitCost;
      summaryText += `${index + 1}. [${item.category}] ${item.item} - Qty: ${item.quantity} x ₹${item.unitCost} = ₹${lineTotal}\n`;
    });

    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    if (onNotify) onNotify("Budget ledger copied to clipboard");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Budget & Expense Ledger</h1>
          <p className="page-desc">
            Itemized cost estimation tool for college sanction requests, sponsorship proposals, and accounts settlement.
          </p>
        </div>
        <button onClick={exportSummary} className="btn btn-primary">
          {copied ? 'Copied' : 'Copy Ledger Summary'}
        </button>
      </div>

      {/* Summary Stats */}
      <div className="grid-3">
        <div className="stat-box">
          <div className="stat-value">₹{totalBudget.toLocaleString('en-IN')}</div>
          <div className="stat-label">Total Projected Cost</div>
        </div>
        <div className="stat-box">
          <div className="stat-value">₹{costPerHead}</div>
          <div className="stat-label">Estimated Cost / Attendee</div>
          <div style={{ marginTop: '8px', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px' }}>
            <span>Attendees:</span>
            <input 
              type="number" 
              value={attendeesCount}
              onChange={(e) => setAttendeesCount(Number(e.target.value))}
              style={{ width: '60px', padding: '2px 4px', border: '1px solid #d1d5db', borderRadius: '3px' }}
            />
          </div>
        </div>
        <div className="stat-box">
          <div className="stat-value">{items.length} Items</div>
          <div className="stat-label">Budgeted Line Items</div>
        </div>
      </div>

      {/* Add Item Form */}
      <form onSubmit={handleAddItem} className="card" style={{ padding: '14px', marginBottom: '16px' }}>
        <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '8px', textTransform: 'uppercase' }}>
          Add Budget Line Item
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '160px 1fr 90px 110px auto', gap: '8px', alignItems: 'center' }}>
          <select 
            className="form-select"
            value={newItem.category}
            onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
          >
            <option value="Marketing & Flex">Marketing & Flex</option>
            <option value="Hospitality & Guest">Hospitality & Guest</option>
            <option value="Refreshments">Refreshments</option>
            <option value="Certificates & Badges">Certificates & Badges</option>
            <option value="Swag & Prizes">Swag & Prizes</option>
            <option value="Logistics">Logistics</option>
            <option value="Contingency">Contingency</option>
          </select>
          <input 
            type="text" 
            placeholder="Item description..."
            className="form-input"
            value={newItem.item}
            onChange={(e) => setNewItem({ ...newItem, item: e.target.value })}
          />
          <input 
            type="number" 
            placeholder="Qty"
            className="form-input"
            value={newItem.quantity}
            onChange={(e) => setNewItem({ ...newItem, quantity: Math.max(1, Number(e.target.value)) })}
          />
          <input 
            type="number" 
            placeholder="Cost (₹)"
            className="form-input"
            value={newItem.unitCost}
            onChange={(e) => setNewItem({ ...newItem, unitCost: Math.max(0, Number(e.target.value)) })}
          />
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </div>
      </form>

      {/* Table */}
      <div className="card" style={{ padding: 0 }}>
        <table className="simple-table">
          <thead>
            <tr>
              <th style={{ width: '40px' }}>#</th>
              <th>Category</th>
              <th>Item</th>
              <th style={{ width: '90px' }}>Qty</th>
              <th style={{ width: '110px' }}>Unit (₹)</th>
              <th style={{ width: '120px' }}>Subtotal (₹)</th>
              <th style={{ width: '60px' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((row, idx) => {
              const subtotal = Number(row.quantity) * Number(row.unitCost);
              return (
                <tr key={row.id}>
                  <td>{idx + 1}</td>
                  <td style={{ fontSize: '12px' }}>{row.category}</td>
                  <td>
                    <input 
                      type="text" 
                      value={row.item} 
                      onChange={(e) => handleUpdate(row.id, 'item', e.target.value)}
                      className="form-input"
                      style={{ padding: '3px 6px' }}
                    />
                  </td>
                  <td>
                    <input 
                      type="number" 
                      value={row.quantity} 
                      onChange={(e) => handleUpdate(row.id, 'quantity', Number(e.target.value))}
                      className="form-input"
                      style={{ padding: '3px 6px' }}
                    />
                  </td>
                  <td>
                    <input 
                      type="number" 
                      value={row.unitCost} 
                      onChange={(e) => handleUpdate(row.id, 'unitCost', Number(e.target.value))}
                      className="form-input"
                      style={{ padding: '3px 6px' }}
                    />
                  </td>
                  <td style={{ fontWeight: 600, color: '#111827' }}>
                    ₹{subtotal.toLocaleString('en-IN')}
                  </td>
                  <td>
                    <button 
                      onClick={() => handleDelete(row.id)}
                      className="btn btn-sm"
                      style={{ color: '#b91c1c' }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div style={{ padding: '12px 16px', background: '#f8fafc', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
            Showing {items.length} budgeted items
          </span>
          <div style={{ fontSize: '15px', fontWeight: 700 }}>
            Total Budget: ₹{totalBudget.toLocaleString('en-IN')}
          </div>
        </div>
      </div>
    </div>
  );
};
