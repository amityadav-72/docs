export const teamDocs = [
  // 5.1 Team Structure
  {
    id: "TD-01",
    title: "Team Structure and Operating Framework",
    section: "Team Documentation",
    category: "03-team-documentation",
    owner: "Vice President",
    status: "Published",
    version: "1.0.0",
    lastReviewed: "2026-10-15",
    summary: "Standard operational anatomy applicable across all functional domains.",
    content: `## 1. Universal Domain Framework
Every club team follows a standardized operating model:
- **Domain Lead:** Accountable for milestone completion, quality, and member mentoring.
- **Associate Leads:** Co-manage discrete tracks (e.g., Tech team has Frontend, Backend, Cloud associates).
- **Student Volunteers:** Execute targeted subtasks under lead supervision.

## 2. Standard Meeting Rhythm
- Weekly domain standup (30 minutes).
- Bi-weekly cross-functional alignment with Vice President.`
  },
  {
    id: "TD-02",
    title: "Cross-Team Dependencies and Handshakes",
    section: "Team Documentation",
    category: "03-team-documentation",
    owner: "Vice President",
    status: "Published",
    version: "1.0.0",
    lastReviewed: "2026-10-15",
    summary: "Service-level turnaround agreements and deliverable handoffs between Tech, Events, Design, and PR.",
    content: `## 1. Critical Inter-Team Handshakes
- **Event Ops -> Design Team:** Event details finalized at T-14 days; Design deliverables due at T-10 days.
- **Design Team -> PR Team:** Visual assets handed over at T-10 days; Marketing campaigns launch at T-9 days.
- **Tech Team -> Event Ops:** Lab software requirements submitted at T-10 days; Lab pre-verification completed at T-2 days.
- **Event Ops -> Documentation Team:** Attendance and photos submitted at T+1 day; Post-Event Report (PER) due at T+3 days.`
  },

  // 5.2 Technical Team
  {
    id: "TD-03",
    title: "Technical Team Overview and Charter",
    section: "Team Documentation",
    category: "03-team-documentation",
    owner: "Technical Lead",
    status: "Published",
    version: "1.0.0",
    lastReviewed: "2026-10-15",
    summary: "Charter, technical scope, code governance, and member mentoring duties.",
    content: `## 1. Technical Team Charter
The Technical Team is responsible for:
- Maintaining all software repositories under \`github.com/mscprpcem\`.
- Architecting and running hands-on developer workshops.
- Building and maintaining digital tooling used by the college community.
- Enforcing security, code review standards, and CI/CD pipelines.`
  },
  {
    id: "TD-04",
    title: "Technical Project Standards",
    section: "Team Documentation",
    category: "03-team-documentation",
    owner: "Technical Lead",
    status: "Published",
    version: "1.0.0",
    lastReviewed: "2026-10-15",
    summary: "Scaffolding, licensing, and structural requirements for club codebases.",
    content: `## 1. Mandatory Codebase Standards
- Every project must include an open-source MIT License.
- Mandatory root files: \`README.md\`, \`.gitignore\`, \`.env.example\`, \`CONTRIBUTING.md\`.
- All environment configurations must load from environment variables, never hardcoded.`
  },
  {
    id: "TD-05",
    title: "Development and Sprint Procedures",
    section: "Team Documentation",
    category: "03-team-documentation",
    owner: "Technical Lead",
    status: "Published",
    version: "1.0.0",
    lastReviewed: "2026-10-15",
    summary: "Issue creation, branch workflows, and sprint review cadences.",
    content: `## 1. Development Lifecycle
1. Feature or bug described in a GitHub Issue.
2. Contributor creates a feature branch following [TECH-04: Branching Strategy](#/doc/TECH-04).
3. Changes committed following [TECH-05: Commit Message Standards](#/doc/TECH-05).
4. Pull Request created targeting \`develop\` or \`main\` with link to issue.`
  },
  {
    id: "TD-06",
    title: "Code Review and Merging Guidelines",
    section: "Team Documentation",
    category: "03-team-documentation",
    owner: "Technical Lead",
    status: "Published",
    version: "1.0.0",
    lastReviewed: "2026-10-15",
    summary: "Peer review rules, automated CI checks, and branch merge protections.",
    content: `## 1. Merge Requirements
- At least 1 approving review from the Technical Lead or designated Associate.
- Automated CI pipeline (lint, test, build) must pass with 0 errors.
- No direct pushes permitted to \`main\` or \`develop\` (enforced via GitHub Branch Protection).`
  },
  {
    id: "TD-07",
    title: "Testing and Quality Standards",
    section: "Team Documentation",
    category: "03-team-documentation",
    owner: "Technical Lead",
    status: "Published",
    version: "1.0.0",
    lastReviewed: "2026-10-15",
    summary: "Automated test coverage targets, static analysis, and linting rules.",
    content: `## 1. Quality Benchmarks
- **Static Analysis:** ESLint / Prettier for JavaScript/TypeScript; Black / Flake8 for Python.
- **Unit Testing:** Critical business logic and API route handlers must include automated test coverage.
- **Build Verification:** Production bundles must compile without unresolved warnings.`
  },
  {
    id: "TD-08",
    title: "Technical Documentation Requirements",
    section: "Team Documentation",
    category: "03-team-documentation",
    owner: "Technical Lead",
    status: "Published",
    version: "1.0.0",
    lastReviewed: "2026-10-15",
    summary: "Mandatory README sections, architecture diagrams, and inline code documentation.",
    content: `## 1. Repository Documentation Requirements
Every repository must document:
- Prerequisites and runtime version baselines.
- Step-by-step local development setup commands.
- Architecture diagram and database entity relationships (ERD).
- Troubleshooting table for standard errors.`
  },
  {
    id: "TD-09",
    title: "Project Maintenance and Upgrades",
    section: "Team Documentation",
    category: "03-team-documentation",
    owner: "Technical Lead",
    status: "Published",
    version: "1.0.0",
    lastReviewed: "2026-10-15",
    summary: "Vulnerability patch schedules, monthly dependency updates, and deprecation protocols.",
    content: `## 1. Monthly Maintenance Cadence
- First weekend of each month: Review Dependabot vulnerability alerts across all club repos.
- Patch minor and patch dependency versions; test locally before merging.
- Any unresolved high-severity CVE must be triaged within 48 hours.`
  },

  // 5.3 Event and Operations Team
  {
    id: "TD-10",
    title: "Event Operations Overview and Charter",
    section: "Team Documentation",
    category: "03-team-documentation",
    owner: "Event Operations Lead",
    status: "Published",
    version: "1.0.0",
    lastReviewed: "2026-10-15",
    summary: "Charter, campus liaison responsibilities, and on-ground logistics scope.",
    content: `## 1. Event Operations Charter
The Event Operations Team manages:
- Physical booking and paperwork for seminar halls, auditoriums, and computer labs.
- Stage coordination, podium audio, microphones, projectors, and seating.
- Guest hospitality (felicitation saplings, mementos, water, tea).
- Day-of-event discipline, crowd flow, and registration desks.`
  },
  {
    id: "TD-11",
    title: "Event Planning Procedures",
    section: "Team Documentation",
    category: "03-team-documentation",
    owner: "Event Operations Lead",
    status: "Published",
    version: "1.0.0",
    lastReviewed: "2026-10-15",
    summary: "Chronological event preparation procedure from concept note to approved letter.",
    content: `## 1. Planning Procedure
- T-30 Days: Draft concept note and estimated budget.
- T-20 Days: Verification by Faculty Advisor.
- T-14 Days: Submit typed permission letter to Principal's office.
- T-10 Days: Requisitions filed with Central Computing Center and Audio-Visual dept.`
  },
  {
    id: "TD-12",
    title: "Speaker Coordination Procedures",
    section: "Team Documentation",
    category: "03-team-documentation",
    owner: "Event Operations Lead",
    status: "Published",
    version: "1.0.0",
    lastReviewed: "2026-10-15",
    summary: "Scouting, communicating with, hosting, and honoring external resource persons.",
    content: `## 1. Speaker Hosting Protocol
- Send formal invitation letter using [TMPL-14](#/doc/TMPL-14).
- Request speaker presentation slides 48 hours prior for backup caching.
- Arrange for green indoor sapling or memento for stage felicitation.
- Issue formal letter of appreciation within 48 hours post-event.`
  },
  {
    id: "TD-13",
    title: "Venue and Equipment Checklists",
    section: "Team Documentation",
    category: "03-team-documentation",
    owner: "Event Operations Lead",
    status: "Published",
    version: "1.0.0",
    lastReviewed: "2026-10-15",
    summary: "Checklist for physical hall verification, audio mics, and projector cables.",
    content: `## 1. Equipment Checklist
- 2 Wireless handheld microphones with tested fresh AA batteries.
- 1 Wired podium backup microphone.
- HDMI cable and USB-C adapter tested with podium laptop.
- Slide clicker with fresh battery.
- Audio auxiliary cord connected to auditorium mixer.`
  },
  {
    id: "TD-14",
    title: "Event-Day Procedures",
    section: "Team Documentation",
    category: "03-team-documentation",
    owner: "Event Operations Lead",
    status: "Published",
    version: "1.0.0",
    lastReviewed: "2026-10-15",
    summary: "Detailed minute-by-minute execution runbook for stage and registration desks.",
    content: `## 1. D-Day Milestones
- T-60 Min: Hall unlocked, AV audio levels checked, ambient background track active.
- T-30 Min: Registration desk operational at venue entrance.
- T-0 Min: Formal commencement with Saraswati Vandana and guest felicitation.
- T+180 Min: Workshop lab execution under technical team guidance.
- T+300 Min: Formal Vote of Thanks and wide group photo.`
  },
  {
    id: "TD-15",
    title: "Post-Event Documentation Procedures",
    section: "Team Documentation",
    category: "03-team-documentation",
    owner: "Event Operations Lead",
    status: "Published",
    version: "1.0.0",
    lastReviewed: "2026-10-15",
    summary: "72-hour compilation mandate for Post-Event Reports (PER), finance settlement, and certificates.",
    content: `## 1. 72-Hour Wrap-up Mandate
- Verify attendance register against Google Form registrations.
- Dispatch digital certificates with verifiable QR codes.
- Collate bills and submit voucher report to college accounts.
- Submit signed Post-Event Report (PER) to Principal and HoD.`
  },

  // 5.4 Documentation Team
  {
    id: "TD-16",
    title: "Documentation Team Overview and Charter",
    section: "Team Documentation",
    category: "03-team-documentation",
    owner: "Documentation Lead",
    status: "Published",
    version: "1.0.0",
    lastReviewed: "2026-10-15",
    summary: "Charter, editorial standards, and portal governance mandate for docs.mscprpcem.tech.",
    content: `## 1. Documentation Team Charter
The Documentation Team is responsible for:
- Maintaining the accuracy, structure, and accessibility of \`docs.mscprpcem.tech\`.
- Reviewing and editing markdown contributions from all club domains.
- Conducting quarterly audits to deprecate outdated technical procedures.
- Preserving historical event records and tenure transition archives.`
  },
  {
    id: "TD-17",
    title: "Documentation Contribution Guidelines",
    section: "Team Documentation",
    category: "03-team-documentation",
    owner: "Documentation Lead",
    status: "Published",
    version: "1.0.0",
    lastReviewed: "2026-10-15",
    summary: "Writing standards, markdown rules, and heading structure requirements.",
    content: `## 1. Writing Rules
- Write in active voice, clear concise prose, avoiding unnecessary jargon.
- Format all commands, file paths, and environment variables in inline code backticks (\`code\`).
- Ensure every document answers a specific operational question.`
  },
  {
    id: "TD-18",
    title: "Content Verification Procedures",
    section: "Team Documentation",
    category: "03-team-documentation",
    owner: "Documentation Lead",
    status: "Published",
    version: "1.0.0",
    lastReviewed: "2026-10-15",
    summary: "Verification protocols ensuring factual accuracy, working commands, and absence of secrets.",
    content: `## 1. Verification Checklist
- Run every bash/shell command in a test environment to verify it works without error.
- Verify that no hardcoded credentials or private data exist.
- Verify that all referenced external links are active.`
  },
  {
    id: "TD-19",
    title: "Document Publication Guidelines",
    section: "Team Documentation",
    category: "03-team-documentation",
    owner: "Documentation Lead",
    status: "Published",
    version: "1.0.0",
    lastReviewed: "2026-10-15",
    summary: "Merge approval criteria and static site production deployment gates.",
    content: `## 1. Production Deployment Gates
- Automated CI pipeline executes markdown linter and link checker.
- PR requires sign-off from Documentation Lead and respective Domain Lead.
- Merge automatically triggers static build and deploys to \`docs.mscprpcem.tech\`.`
  },
  {
    id: "TD-20",
    title: "Revision and Archival Procedures",
    section: "Team Documentation",
    category: "03-team-documentation",
    owner: "Documentation Lead",
    status: "Published",
    version: "1.0.0",
    lastReviewed: "2026-10-15",
    summary: "Quarterly audit workflow for identifying, deprecating, and archiving obsolete documents.",
    content: `## 1. Archival Protocol
When a procedure or policy is replaced:
1. Move the legacy markdown file to the \`11-archive-history/\` directory.
2. Add an archival banner at the top of the document linking to the canonical replacement.
3. Update the Master Archive Index (\`ARC-01\`).`
  }
];
