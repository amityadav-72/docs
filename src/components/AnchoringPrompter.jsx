import React, { useState } from 'react';

export const AnchoringPrompter = ({ onNotify }) => {
  const [eventName, setEventName] = useState("Azure Cloud & AI Bootcamp 2026");
  const [guestName, setGuestName] = useState("Er. Rahul Deshmukh");
  const [principalName, setPrincipalName] = useState("Dr. D. T. Ingole");
  const [hodName, setHodName] = useState("Dr. A. B. Kulkarni");
  const [facultyName, setFacultyName] = useState("Prof. S. R. Sharma");
  const [anchorName, setAnchorName] = useState("Ananya & Harsh");
  const [copiedIndex, setCopiedIndex] = useState(null);

  const scripts = [
    {
      segment: "01. Opening Address & Stage Call",
      timing: "10:00 AM (3 Mins)",
      cue: "Soft background instrumental fades down. Podium microphone active.",
      speaker: anchorName,
      content: `A very warm and delightful morning to our honorable dignitaries on the dais, respected Principal Sir ${principalName}, respected Head of Department ${hodName}, our enthusiastic Faculty Coordinator ${facultyName}, our esteemed guest speaker of the day ${guestName}, and my dear fellow engineers!

"Technology is best when it brings people together."

On behalf of the Microsoft Student Club (MSC) of P. R. Pote Patil College of Engineering & Management, Amravati, I, ${anchorName}, take immense pride and honor in welcoming each and every one of you to our flagship technical workshop: "${eventName}"!

Today is not just about lectures; it is about building, deploying, and stepping into the future of cloud computing and intelligence.`
    },
    {
      segment: "02. Traditional Lighting of the Lamp (Deep Prajwalan)",
      timing: "10:05 AM (4 Mins)",
      cue: "Play Saraswati Vandana instrumental track. Volunteers escort dignitaries with brass lamp and matches.",
      speaker: anchorName,
      content: `"Asato ma sadgamaya, Tamaso ma jyotirgamaya."
Knowledge is the divine beacon that dispels the darkness of ignorance.

May I now respectfully request our honorable Principal ${principalName}, respected HoD Sir ${hodName}, Faculty Coordinator ${facultyName}, and our chief guest ${guestName} to step forward for the auspicious lighting of the lamp and seek the blessings of Goddess Saraswati.

[Pause while lamp is lit by dignitaries]

Thank you respected dignitaries. Please grace your respective seats on the dais.`
    },
    {
      segment: "03. Dignitary Felicitation with Floral Saplings",
      timing: "10:10 AM (5 Mins)",
      cue: "Logistics volunteers bring indoor green saplings and mementos on silver trays from stage left.",
      speaker: anchorName,
      content: `In Indian tradition, we honor our guests with green saplings that symbolize perpetual growth, learning, and sustainability.

• May I request our President, MSC PRPCEM, to welcome and felicitate our honorable Principal ${principalName} with a green sapling.
[Applause from audience]

• May I request our Vice President to welcome our respected HoD ${hodName}.
[Applause]

• And now, the moment we have all eagerly awaited: may I request our respected Principal Sir ${principalName} to kindly felicitate our Chief Guest and Resource Person for today, ${guestName}, with a sapling and token of college esteem!
[Heavy Applause from audience]`
    },
    {
      segment: "04. Introduction of Resource Person / Keynote Speaker",
      timing: "10:17 AM (3 Mins)",
      cue: "Projector displays Speaker Profile slide with photo and credentials.",
      speaker: anchorName,
      content: `Now, to steer our technical minds into the deep waters of modern engineering, we have an exemplary technologist among us today.

${guestName} is a veteran cloud architect and Microsoft MVP with over a decade of production experience architecting scalable distributed systems. He has empowered thousands of student developers across the globe and currently leads pivotal cloud transformation initiatives.

Sir, the stage, the screens, and these eager young minds are all yours. Ladies and gentlemen, with a warm round of applause, please welcome ${guestName}!`
    },
    {
      segment: "05. Formal Vote of Thanks (Valedictory)",
      timing: "04:15 PM (4 Mins)",
      cue: "Audience finishes practical labs and feedback submission. VP approaches podium.",
      speaker: "Vice President, MSC PRPCEM",
      content: `"Gratitude is the memory of the heart."

As we draw curtains on this transformative edition of "${eventName}", I stand before you filled with profound gratitude.

First and foremost, our heartfelt thanks to our mentor and Chief Guest, ${guestName}, for his invaluable time, hands-on guidance, and for demystifying complex cloud concepts with such clarity.

We express our sincerest gratitude to our visionary Principal, ${principalName}, and HoD ${hodName}, whose unwavering administrative support and faith in student initiatives make events like MSC possible.

A huge shoutout to our core team—Technical, Design, PR, and Logistics leads—who worked tirelessly to ensure today went without a single glitch.

And finally, to you—our dear participants. Your relentless curiosity, active debugging, and vibrant enthusiasm are the true heartbeat of MSC PRPCEM.

Thank you one and all. Stay curious, keep coding, and have a wonderful evening ahead!`
    }
  ];

  const copyScript = (text, idx) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    if (onNotify) onNotify("Speech segment copied");
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Stage Anchoring Prompter & Scripts</h1>
          <p className="page-desc">
            Complete scripts, stage cues, and timing checkpoints for event hosts and D-Day anchors.
          </p>
        </div>
      </div>

      {/* Variables Form */}
      <div className="card" style={{ padding: '16px', marginBottom: '20px' }}>
        <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '8px', textTransform: 'uppercase' }}>
          Event & Dignitary Names (Updates all speeches below automatically)
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
          <div>
            <label className="form-label">Event Name</label>
            <input 
              type="text" 
              className="form-input"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
            />
          </div>
          <div>
            <label className="form-label">Chief Guest Name</label>
            <input 
              type="text" 
              className="form-input"
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
            />
          </div>
          <div>
            <label className="form-label">Principal Name</label>
            <input 
              type="text" 
              className="form-input"
              value={principalName}
              onChange={(e) => setPrincipalName(e.target.value)}
            />
          </div>
          <div>
            <label className="form-label">Department HoD Name</label>
            <input 
              type="text" 
              className="form-input"
              value={hodName}
              onChange={(e) => setHodName(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Scripts */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {scripts.map((script, idx) => (
          <div key={idx} className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <div>
                <h3 style={{ fontSize: '15px', fontWeight: 600 }}>{script.segment}</h3>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                  Timing: {script.timing} | Role: {script.speaker}
                </span>
              </div>
              <button 
                onClick={() => copyScript(script.content, idx)}
                className="btn btn-sm"
              >
                {copiedIndex === idx ? 'Copied' : 'Copy'}
              </button>
            </div>

            <div className="notice notice-warning" style={{ marginBottom: '10px' }}>
              <strong>Stage Cue:</strong> {script.cue}
            </div>

            <div style={{ 
              background: '#f8fafc', 
              padding: '14px', 
              borderRadius: '4px', 
              border: '1px solid #e5e7eb',
              fontFamily: 'Georgia, serif',
              fontSize: '14px',
              lineHeight: 1.8,
              color: '#1f2937',
              whiteSpace: 'pre-wrap'
            }}>
              {script.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
