export const leadershipRoles = [
  {
    role: "President",
    domain: "Executive Board",
    responsibilities: [
      "Principal point of contact between MSC PRPCEM, College Management, and Microsoft Learn Student Ambassadors (MLSA) ecosystem.",
      "Secures administrative permissions from Principal, HoDs, and Dean Academics.",
      "Chairs weekly core team scrums and approves all event budgets & timelines.",
      "Conducts year-end succession interviews and oversees knowledge handover."
    ],
    kpis: ["3+ Flagship technical workshops/hackathons per year", "Community reach of 1000+ students", "Timely college compliance and documentation"],
    badge: "Executive Head"
  },
  {
    role: "Vice President",
    domain: "Operations & Execution",
    responsibilities: [
      "Manages cross-domain alignment between Technical, Design, PR, and Logistics teams.",
      "Maintains the master calendar and oversees day-to-day event progress.",
      "Steps in as acting executive head in the President's absence.",
      "Supervises volunteer recruitment, onboarding, and internal team morale."
    ],
    kpis: ["Zero milestone slippages across domains", "100% resolution of inter-team bottlenecks", "Comprehensive documentation archive"],
    badge: "Operations Lead"
  },
  {
    role: "Technical Lead",
    domain: "Tech & Projects",
    responsibilities: [
      "Curates workshop syllabus (Web Dev, Cloud/Azure, AI/ML, DevOps, DSA).",
      "Manages MSC PRPCEM GitHub organization, official website, and cloud infrastructure.",
      "Designs problem statements and test cases for hackathons/coding contests.",
      "Runs tech rehearsals 24 hours prior to hands-on workshops."
    ],
    kpis: ["Clean hands-on workshop code repos", "Zero server downtime during contests", "Mentorship of 50+ project builders"],
    badge: "Tech Domain"
  },
  {
    role: "Event & Logistics Lead",
    domain: "Event Management",
    responsibilities: [
      "Books seminar halls, auditoriums, and labs with College Administration.",
      "Coordinates sound systems, projectors, podium mics, and backup power.",
      "Arranges guest felicitations (mementos, saplings), snacks, and water bottles.",
      "Supervises stage discipline, registration desks, and crowd flow on D-Day."
    ],
    kpis: ["Smooth stage flow with zero AV delays", "Accurate physical requisitions filed 7 days ahead", "Zero safety or venue compliance issues"],
    badge: "Logistics Domain"
  },
  {
    role: "Design & Media Lead",
    domain: "Creative & Brand",
    responsibilities: [
      "Designs official event posters (1:1 feed, 9:16 story, 16:9 projector/banner).",
      "Strictly upholds Microsoft branding guidelines and official typography.",
      "Generates ID cards, certificates, stickers, and swag merchandise.",
      "Deploys official event photographers and videographers for social recap."
    ],
    kpis: ["Posters published 10 days before D-Day", "High-res media gallery uploaded within 24h", "Professional certificate templates"],
    badge: "Creative Domain"
  },
  {
    role: "PR & Marketing Lead",
    domain: "Public Relations & Growth",
    responsibilities: [
      "Coordinates campus campaigns: class announcements, posters on notice boards.",
      "Manages social handles (@mscprpcem on LinkedIn, Instagram, Twitter/X).",
      "Executes broadcast campaigns on official WhatsApp and Telegram channels.",
      "Drafts press releases and college newsletter submissions post-event."
    ],
    kpis: ["Target participant registrations achieved", "100% class outreach coverage", "Post-event media coverage in college news"],
    badge: "Outreach Domain"
  },
  {
    role: "Sponsorship & Finance Lead",
    domain: "Treasurer & Corporate",
    responsibilities: [
      "Prepares itemized event budget estimates for college approval.",
      "Scouts corporate sponsors, tech swag partners, and platform sponsors.",
      "Maintains the official expense ledger, collects GST bills, and submits vouchers.",
      "Manages prize pool payouts and certificates of appreciation for sponsors."
    ],
    kpis: ["100% budget transparency with physical receipts", "Zero negative cash balance", "Timely bill clearance from college account section"],
    badge: "Finance Domain"
  }
];

export const eventLifecyclePhases = [
  {
    phaseId: "phase-1",
    phaseNumber: "01",
    title: "Ideation & Feasibility Study",
    timeframe: "T - 30 to T - 21 Days",
    summary: "Formalizing event vision, identifying learning outcomes, target audience, and feasibility check.",
    steps: [
      {
        title: "Define Core Event Blueprint",
        detail: "Draft an Event Concept Note with: Title, Objective, Target Batch (FE/SE/TE/BE), Mode (Offline / Hybrid), Domain (AI, Web, Cloud, Career), and Expected Footfall.",
        tip: "Avoid generic topics. Align with trending industry technologies or semester curriculum requirements."
      },
      {
        title: "Guest Speaker Scouting & Confirmation",
        detail: "Scout Microsoft MVPs, industry software engineers, or prominent alumni. Send formal pitch email with topic outline, date options, and platform details.",
        tip: "Always keep a secondary backup speaker in case of last-minute corporate emergencies."
      },
      {
        title: "Preliminary Budget & Date Collision Check",
        detail: "Cross-verify college academic calendar for mid-term exams, practicals, industrial visits, or other department fests before locking the date.",
        tip: "Saturdays or weekday post-afternoon slots generally yield the highest student turnout."
      }
    ]
  },
  {
    phaseId: "phase-2",
    phaseNumber: "02",
    title: "Administrative Approvals & College Protocol",
    timeframe: "T - 20 to T - 14 Days",
    summary: "Acquiring written permissions from Faculty Coordinator, Head of Department (HoD), and College Principal.",
    steps: [
      {
        title: "Proposal Presentation to Faculty Coordinator",
        detail: "Present the finalized Concept Note and estimated budget to MSC PRPCEM Faculty Advisor for initial verification and signature.",
        tip: "Bring previous successful event reports as proof of club track record."
      },
      {
        title: "Principal Permission Letter Submission",
        detail: "Submit the official typed permission letter signed by Faculty Coordinator to the Principal's office. Obtain inward stamp and approved sign-off.",
        tip: "Use our interactive Letter Generator in the portal to create the exact college-formatted draft."
      },
      {
        title: "Venue & Infrastructure Requisition",
        detail: "Submit written requisitions for Seminar Hall / Computer Center Labs, Audio-Visual dept (Microphones, Projector, HDMI cords, Screen), and Wi-Fi access.",
        tip: "Inspect the booked lab 10 days ahead to ensure all PC monitors and LAN connections are working."
      }
    ]
  },
  {
    phaseId: "phase-3",
    phaseNumber: "03",
    title: "Creative Rollout & Marketing Blitz",
    timeframe: "T - 14 to T - 3 Days",
    summary: "Launching registrations, social media hype, classroom announcements, and banner placements.",
    steps: [
      {
        title: "Registration Portal & Form Setup",
        detail: "Create registration form (Google Forms or Unstop). Capture: Full Name (for certificates), Roll No, Branch, Year, WhatsApp No, GitHub profile (if hackathon).",
        tip: "Set auto-confirmation email with link to the official participant WhatsApp group."
      },
      {
        title: "Design Collaterals Release",
        detail: "Design Team rolls out: Teaser poster (T-14), Main Reveal poster with speaker bio (T-10), Rulebook/Agenda carousel (T-7), and 'Few Seats Left' countdown (T-3).",
        tip: "Include College Logo, MSC PRPCEM Badge, Date, Time, Venue, and QR code on all creatives."
      },
      {
        title: "Classroom Outreach Campaign",
        detail: "Deploy 2-person teams to visit classes during the last 5 minutes of lectures. Give a crisp 90-second elevator pitch highlighting takeaways and certificate value.",
        tip: "Target 2nd and 3rd-year engineering classrooms directly for technical workshops."
      }
    ]
  },
  {
    phaseId: "phase-4",
    phaseNumber: "04",
    title: "Pre-Flight Technical & Stage Rehearsal",
    timeframe: "T - 48 Hours to T - 2 Hours",
    summary: "Dry run of presentations, lab software verification, stage anchoring flow, and volunteer briefing.",
    steps: [
      {
        title: "Lab Environment Sanity Check",
        detail: "Verify installed software (Node.js, VS Code, Git, Python, Docker, etc.) on all target lab computers. Test high-bandwidth Wi-Fi with IT admin.",
        tip: "Keep an offline USB drive loaded with installer executables in case college internet throttles."
      },
      {
        title: "Stage Run-of-Show & Anchoring Rehearsal",
        detail: "Review minute-by-minute agenda with anchors. Prepare guest intro cards, felicitation saplings/mementos, and national anthem / Saraswati Vandana audio files.",
        tip: "Double-check wireless microphone AA batteries and spare wired mic connectivity."
      },
      {
        title: "Volunteer Roster & Duty Assignment",
        detail: "Assign explicit roles: Desk Registration (2 leads), Stage/AV Control (2 leads), Photography/Videography (2 leads), Escort & Guest Hospitality (2 leads).",
        tip: "Print 3 copies of the participant registration list for manual roll-call verification."
      }
    ]
  },
  {
    phaseId: "phase-5",
    phaseNumber: "05",
    title: "D-Day Execution & Stage Protocol",
    timeframe: "Event Day (Minute-by-Minute)",
    summary: "Flawless on-ground operation, stage etiquette, crowd discipline, and timing adherence.",
    steps: [
      {
        title: "Hall Setup & Tech Check (T - 60 Min)",
        detail: "Boot podium laptop, plug HDMI/VGA, test slide clicker, play ambient low-volume background tech soundtrack. Open registration desk at venue entrance.",
        tip: "Set up banners at auditorium entrance for photo opportunities."
      },
      {
        title: "Formal Inauguration & Guest Felicitation",
        detail: "Anchor introduces dignitary guests -> Saraswati Vandana / Lighting the Lamp -> President welcomes audience -> Principal/HoD address -> Speaker felicitation.",
        tip: "Keep the inaugural segment strictly under 20 minutes to maximize workshop technical time."
      },
      {
        title: "Core Workshop / Contest Execution",
        detail: "Speaker/Mentor takes over. Tech volunteers roam aisles helping students troubleshoot code errors and installation bugs.",
        tip: "Conduct mid-session interactive quiz or swag giveaway to boost energy."
      },
      {
        title: "Valedictory, Vote of Thanks & Group Photo",
        detail: "Present speaker with certificate of appreciation & memento. VP delivers Vote of Thanks. Collect immediate Google Form feedback. Take wide group photo.",
        tip: "Ensure all participants fill out feedback form before leaving the auditorium."
      }
    ]
  },
  {
    phaseId: "phase-6",
    phaseNumber: "06",
    title: "Post-Event Wrap-up & College Documentation",
    timeframe: "T + 24 Hours to T + 7 Days",
    summary: "Generating certificates, compiling Post-Event Report (PER), financial audit, and college PR submission.",
    steps: [
      {
        title: "Digital Certificate Verification & Dispatch",
        detail: "Cross-match registration list with attendance sheet. Bulk-generate QR-verified PDF certificates and email within 48 hours.",
        tip: "Double-check student name spellings against their college ERP records."
      },
      {
        title: "Post-Event Report (PER) Compilation",
        detail: "Compile 4-5 page official PER including: Executive Summary, Objectives, Speaker Profile, Minute-by-Minute Agenda, Participant Statistics, 6 High-Res Photos, and Feedback Charts.",
        tip: "Submit one signed hardcopy to Principal office, one to Department HoD, and archive one in MSC files."
      },
      {
        title: "Financial Settlement & Voucher Clearance",
        detail: "Collate all receipts (food, mementos, printing, flex banners). Paste on A4 voucher sheets with signatures. Submit to College Accounts for reimbursement.",
        tip: "Keep duplicate photocopies of all bills before handing them to accounts."
      },
      {
        title: "Social Media Recap & Thank You Letters",
        detail: "Post photo dump + video reel on Instagram and LinkedIn tagging PRPCEM and Microsoft. Send formal Thank You letter to Guest Speaker with student testimonials.",
        tip: "Mention key metrics: '250+ students trained in Azure cloud technologies'."
      }
    ]
  }
];

export const domainSOPs = [
  {
    domain: "Technical Team",
    color: "blue",
    sopList: [
      {
        title: "GitHub Organization & Repo Governance",
        rules: [
          "All event starter code and solutions must be pushed to `github.com/mscprpcem` at least 48 hours prior to the workshop.",
          "Repositories must contain a comprehensive `README.md` with: Prerequisites, Setup Steps, Architecture Diagram, and FAQ.",
          "Enforce Branch Protection on `main`: require pull requests and at least 1 lead review before merging.",
          "Never commit API keys, Azure secrets, or database credentials. Use `.env.example` templates."
        ]
      },
      {
        title: "Workshop Lab Environment Setup",
        rules: [
          "Coordinate with Central Computer Center admin 5 days prior to whitelist required domains (e.g. npm registry, pip, GitHub, VS Code extensions).",
          "Create a portable USB flash drive with offline package bundles (Node v20+, Python 3.11+, VS Code .exe).",
          "Test projector aspect ratio (16:9 vs 4:3) and ensure font size in code editor is set to at least 18px for stage visibility."
        ]
      }
    ]
  },
  {
    domain: "Design & Brand Identity",
    color: "purple",
    sopList: [
      {
        title: "Official Brand Asset Specifications",
        rules: [
          "Colors: Microsoft Azure Blue (#0078D4), Vibrant Cyan (#00E5FF), Midnight Slate (#0B101E), White (#FFFFFF).",
          "Typography: Outfit (Headings), Plus Jakarta Sans (Body), JetBrains Mono (Code/Dates).",
          "Posters must feature: PRPCEM Logo (Top Left), MSC PRPCEM Logo (Top Right), Title, Date/Time, Venue, Registration QR, Contact Person.",
          "Never distort or stretch logos. Maintain aspect ratio and minimum 20px clear margin."
        ]
      },
      {
        title: "Media Production Timeline",
        rules: [
          "T-14 Days: Event teaser & date lock banner.",
          "T-10 Days: Official announcement poster and speaker reveal.",
          "T-4 Days: Event booklet, rulebook PDF, and stage background projector slides.",
          "D-Day: Live DSLR photography covering: podium speeches, hands-on student screens, crowd view, felicitation, group photo.",
          "T+24 Hours: Curated Google Drive photo link sent to PR team for social posting."
        ]
      }
    ]
  },
  {
    domain: "Public Relations & Outreach",
    color: "emerald",
    sopList: [
      {
        title: "WhatsApp & Telegram Broadcasting Etiquette",
        rules: [
          "Never spam student groups. Restrict broadcasts to maximum once per day during prime hours (12:30 PM lunch break or 7:30 PM evening).",
          "Messages must follow the format: Hook Headline -> Event Summary -> Key Benefits -> Date/Venue -> Registration Link.",
          "Ensure group admins have 'Only Admins Can Send Messages' enabled on official announcement channels to prevent link pollution.",
          "Maintain a dedicated query desk number for participant FAQs."
        ]
      },
      {
        title: "Social Media Release Guidelines",
        rules: [
          "Instagram Captions must tag: @mscprpcem, @prpcem_amravati, @msftstudent, speaker handle.",
          "LinkedIn posts must highlight academic outcomes, student innovations, and leadership development.",
          "Draft press release note (150 words in Marathi and English) for submission to local Amravati newspapers through College PRO."
        ]
      }
    ]
  },
  {
    domain: "Operations & Stage Management",
    color: "amber",
    sopList: [
      {
        title: "Stage Protocol & Dignitary Etiquette",
        rules: [
          "Ensure stage seating order: Principal (Center), Guest Speaker (Immediate Right of Principal), HoD (Immediate Left of Principal), Faculty Coordinator.",
          "Have floral bouquets / green indoor saplings ready on the side table before welcoming guests.",
          "Keep clean glasses of water and paper napkins at each stage chair.",
          "Test podium microphone height and gain to eliminate audio feedback."
        ]
      },
      {
        title: "Auditorium & Crowd Discipline",
        rules: [
          "Reserve the first two rows for faculty members and core organizers.",
          "Position volunteers at both auditorium doors to minimize noise and mid-session disturbances.",
          "Ensure emergency exits and fire routes are completely clear of bags and extension wires."
        ]
      }
    ]
  }
];

export const contingencyProtocols = [
  {
    issue: "Campus Internet Fails During Coding Contest or Hands-on Lab",
    severity: "Critical",
    action: "1. Switch podium machine to designated mobile 5G hotspot immediately. 2. Provide offline starter repository zips via pre-loaded USB drives. 3. If online contest (e.g. HackerRank/Unstop), contact platform support or extend contest duration by 30 minutes with announcement."
  },
  {
    issue: "Chief Guest or External Speaker Delayed by 1-2 Hours",
    severity: "High",
    action: "1. Promptly pivot agenda: start with icebreaker tech trivia, mini lightning talk by Tech Lead, or live project showcase. 2. Anchor communicates gracefully: 'We have an exciting community showcase lined up before our keynote address'. 3. Hospitality lead stays in touch with guest driver."
  },
  {
    issue: "Projector or Audio Microphone Stops Working Mid-Event",
    severity: "Moderate",
    action: "1. Keep secondary wired podium mic and spare batteries on stage desk. 2. AV lead immediately inspects HDMI adapter and cable switches. 3. Speaker switches to whiteboard / interactive Q&A while technicians resolve hardware in background."
  },
  {
    issue: "Registration Turnout Far Exceeds Seminar Hall Capacity",
    severity: "Moderate",
    action: "1. Prioritize pre-registered students with confirmed QR tickets. 2. If overflow exceeds 50+ students, activate live Microsoft Teams stream in adjacent Computer Lab. 3. Announce duplicate session slot for next day if speaker permits."
  }
];

export const handoverChecklist = [
  {
    category: "Digital Assets & Infrastructure",
    items: [
      "Domain DNS control for `mscprpcem.tech` (Cloudflare / Namecheap account access).",
      "Official Google Workspace / Admin Email credentials (`admin@mscprpcem.tech`, `president@mscprpcem.tech`).",
      "GitHub Organization Owner transfer (`github.com/mscprpcem`).",
      "Microsoft Azure for Students subscription & Sponsorship credits portal.",
      "Canva Pro for Teams login and master brand kit folders."
    ]
  },
  {
    category: "Social Media & Community Channels",
    items: [
      "LinkedIn Organization Page Super Admin privileges.",
      "Instagram account login credentials and two-factor recovery codes.",
      "Official WhatsApp Community & Announcement Channel Group ownership transfer.",
      "YouTube channel access containing past event recordings."
    ]
  },
  {
    category: "Administrative & Physical Documentation",
    items: [
      "Physical binder of all approved Principal letters, HoD NOCs, and college approvals from previous tenures.",
      "Expense ledger, balance sheets, and remaining club treasury funds.",
      "Club stamp / rubber seals and official letterhead templates.",
      "Inventory of club banners, extension boards, HDMI cables, clickers, and unused stickers/swag."
    ]
  },
  {
    category: "Institutional Relations & Successor Mentorship",
    items: [
      "Formal in-person introduction of incoming President to Principal, HoDs, and Registrar.",
      "Handover of Faculty Coordinator contact protocol and meeting cadences.",
      "Two-week shadow period during which incoming leads observe executive decision making.",
      "Signing of the official Annual Tenure Handover Memorandum."
    ]
  }
];
