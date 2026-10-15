export const sopsDocs = [
  {
    id: "SOP-01",
    sopId: "SOP-DEV-01",
    title: "Creating and Approving a New Club Project",
    section: "Standard Operating Procedures",
    category: "07-sops",
    owner: "Technical Lead",
    status: "Published",
    version: "1.0.0",
    lastReviewed: "2026-10-15",
    summary: "Standard procedure for proposing, evaluating, and greenlighting an official MSC PRPCEM software project.",
    content: `## 1. SOP Title and Identifier
**SOP-DEV-01: Creating and Approving a New Club Project**

## 2. Purpose
To ensure that all software projects developed under the name of MSC PRPCEM possess clear academic utility, feasible maintenance plans, proper licensing, and technical lead oversight before resource allocation.

## 3. Scope
Applies to all student proposals, web applications, tools, and contest platforms developed under the club banner.

## 4. Responsible Role
**Technical Lead, MSC PRPCEM**

## 5. Prerequisites
- Draft Project Proposal completed using \`TMPL-06\` (Problem statement, target audience, technical stack, maintainer roster).
- Commitment of at least 2 active club student maintainers for a minimum of 2 academic semesters.

## 6. Required Approvals
1. Technical Lead (Architecture & Stack feasibility).
2. Vice President (Milestone scheduling & team capacity).
3. Faculty Advisor (Administrative sanction).

## 7. Step-by-Step Procedure
1. **Proposal Submission:** Lead author submits the completed Project Proposal to the Technical Lead via email.
2. **Technical Feasibility Review:** Technical Lead evaluates stack alignment, security boundaries, and infrastructure requirements within 5 working days.
3. **Architecture Debrief:** Technical Lead conducts a 30-minute review with authors to finalize database models and API contracts.
4. **Executive Approval:** Project is presented at the weekly executive sync for formal greenlighting.
5. **Repository Provisioning:** Technical Lead provisions a repository under \`github.com/mscprpcem\` following \`SOP-DEV-02\`.
6. **Milestone Baseline:** Maintainers configure GitHub Milestones and initial issue board.

## 8. Expected Outcome
A newly approved repository on GitHub with initialized scaffolding, branch protection, CI/CD pipeline, and registered active maintainers.

## 9. Verification Checklist
- [ ] Project registered in \`PRJ-06 Active Projects Registry\`.
- [ ] Open-source MIT License committed to repository root.
- [ ] Standard \`README.md\` and \`.env.example\` committed.
- [ ] Maintainers assigned \`Triage\` or \`Write\` permissions.

## 10. Exception Handling
If proposed stack requires unbudgeted cloud infrastructure, the proposal is paused until corporate sponsorship or college budget allocation is confirmed.

## 11. Escalation Procedure
Disputes regarding rejected project proposals are escalated to the President and Faculty Advisor for review.

## 12. Related Documents
- [PRJ-01: Club Project Documentation Standards](#/doc/PRJ-01)
- [SOP-02: Creating and Configuring a GitHub Repository](#/doc/SOP-02)

## 13. Owner and Review Schedule
- **Owner:** Technical Lead
- **Review Interval:** 180 Calendar Days

## 14. Revision History
| Version | Date | Author | Summary |
| :--- | :--- | :--- | :--- |
| 1.0.0 | 2026-10-15 | Technical Lead | Initial canonical release |`
  },
  {
    id: "SOP-02",
    sopId: "SOP-DEV-02",
    title: "Creating and Configuring a GitHub Repository",
    section: "Standard Operating Procedures",
    category: "07-sops",
    owner: "Technical Lead",
    status: "Published",
    version: "1.0.0",
    lastReviewed: "2026-10-15",
    summary: "Mandatory steps for initializing, protecting, and configuring a repository in the club GitHub organization.",
    content: `## 1. SOP Title and Identifier
**SOP-DEV-02: Creating and Configuring a GitHub Repository**

## 2. Purpose
To ensure that all repositories under \`github.com/mscprpcem\` adhere to standardized naming, branch protection, license inclusion, and secret scanning.

## 3. Scope
All public and internal repositories created within the official MSC PRPCEM GitHub organization.

## 4. Responsible Role
**Technical Lead, MSC PRPCEM**

## 5. Prerequisites
- Approved Project Proposal or approved event code initiative.
- GitHub Organization Owner or Admin privileges.

## 6. Required Approvals
Technical Lead authorization.

## 7. Step-by-Step Procedure
1. **Create Repository:** Navigate to \`github.com/organizations/mscprpcem/repositories/new\`.
2. **Naming Convention:** Name using lowercase kebab-case (e.g., \`portal-web\`, \`workshop-azure-bootcamp\`).
3. **Visibility:** Set to **Public** unless containing unreleased competition problem statements.
4. **Initialize Files:** Check **Add README.md**, **Add .gitignore** (select Node/Python), and select **MIT License**.
5. **Configure Branch Protection:**
   - Go to **Settings > Branches > Add branch protection rule**.
   - Branch pattern: \`main\`.
   - Check: *Require a pull request before merging* (1 approval required).
   - Check: *Require status checks to pass before merging*.
   - Check: *Do not allow bypassing the above settings*.
6. **Enable Security Scanners:**
   - Go to **Settings > Code security and analysis**.
   - Enable: *Dependabot alerts*, *Dependabot security updates*, *Secret scanning*.
7. **Team Permissions:** Grant the designated project team \`Write\` access; general organization members retain \`Read\` access.

## 8. Expected Outcome
A securely initialized repository configured with automated security scanning and strict PR merge barriers.

## 9. Verification Checklist
- [ ] Branch protection active on \`main\`.
- [ ] Secret scanning enabled.
- [ ] Dependabot alerts active.
- [ ] Issue templates configured.

## 10. Exception Handling
If a repository is temporary (e.g., 2-day workshop demo), branch protection may be relaxed to allow direct lead commits, but secret scanning remains mandatory.

## 11. Escalation Procedure
Report access permission issues to the President.

## 12. Related Documents
- [TECH-20: Repository Administration and Branch Protection](#/doc/TECH-20)
- [POL-05: Repository Management & Admin Guidelines](#/doc/POL-05)

## 13. Owner and Review Schedule
- **Owner:** Technical Lead
- **Review Interval:** 180 Calendar Days

## 14. Revision History
| Version | Date | Author | Summary |
| :--- | :--- | :--- | :--- |
| 1.0.0 | 2026-10-15 | Technical Lead | Initial canonical release |`
  },
  {
    id: "SOP-05",
    sopId: "SOP-EVT-01",
    title: "Planning and Preparing an On-Campus Workshop",
    section: "Standard Operating Procedures",
    category: "07-sops",
    owner: "Event Operations Lead",
    status: "Published",
    version: "1.0.0",
    lastReviewed: "2026-10-15",
    summary: "Chronological operating steps for planning, greenlighting, and setting up an on-campus student technical workshop.",
    content: `## 1. SOP Title and Identifier
**SOP-EVT-01: Planning and Preparing an On-Campus Workshop**

## 2. Purpose
To provide an actionable, foolproof timeline for delivering high-impact on-campus technical workshops with zero administrative delays, venue conflicts, or technical failures.

## 3. Scope
All hands-on technical workshops, bootcamps, and coding seminars organized by MSC PRPCEM.

## 4. Responsible Role
**Event Operations Lead, MSC PRPCEM**

## 5. Prerequisites
- Finalized workshop topic and syllabus outlining at least 70% hands-on lab time.
- Identified and confirmed resource person (speaker/trainer).

## 6. Required Approvals
1. Faculty Coordinator, MSC PRPCEM.
2. Head of Department, CSE/IT.
3. Principal, PRPCEM Amravati.

## 7. Step-by-Step Procedure
1. **T-21 Days (Concept Note):** Draft Event Concept Note and estimated budget. Confirm topic with Technical Lead.
2. **T-14 Days (Formal Permissions):**
   - Generate official letter using the [Letter Generator](#/tool/letter-generator).
   - Obtain signatures from Faculty Coordinator and HoD.
   - Submit to Principal's Office and obtain inward stamp.
3. **T-12 Days (Requisitions):**
   - Submit written requisition to Central Computing Center for lab reservation.
   - Submit requisition to Audio-Visual department for microphones and projector.
4. **T-10 Days (Design & Marketing):**
   - Design team releases event poster.
   - Registration form launched via Google Forms or Unstop.
5. **T-7 Days (Classroom Outreach):** Execute 90-second classroom pitches in 2nd and 3rd year engineering sections.
6. **T-2 Days (Lab Dry Run):** Tech team boots lab computers, installs required runtimes, and verifies internet whitelist.
7. **T-1 Day (Final Briefing):** All organizers review the Event-Day Runbook (\`EVT-09\`).

## 8. Expected Outcome
Approved venue, verified lab environment, target participant enrollment, and seamless readiness.

## 9. Verification Checklist
- [ ] Principal approved letter with inward register number.
- [ ] Lab In-charge confirmation received.
- [ ] Speaker travel & memento confirmed.
- [ ] Lab computers tested with required software.

## 10. Exception Handling
If college internet drops on D-Day, switch podium machine to designated mobile hotspot and distribute offline starter bundles via USB flash drives.

## 11. Escalation Procedure
Administrative delays with venue booking must be escalated immediately to the Faculty Advisor.

## 12. Related Documents
- [EVT-01: Event Planning Standard Procedure](#/doc/EVT-01)
- [SOP-14: Securing College Administrative Permissions](#/doc/SOP-14)

## 13. Owner and Review Schedule
- **Owner:** Event Operations Lead
- **Review Interval:** 180 Calendar Days

## 14. Revision History
| Version | Date | Author | Summary |
| :--- | :--- | :--- | :--- |
| 1.0.0 | 2026-10-15 | Event Operations Lead | Initial canonical release |`
  },
  {
    id: "SOP-14",
    sopId: "SOP-ADM-01",
    title: "Securing College Administrative Permissions",
    section: "Standard Operating Procedures",
    category: "07-sops",
    owner: "President",
    status: "Published",
    version: "1.0.0",
    lastReviewed: "2026-10-15",
    summary: "Official college paperwork submission chain for Principal, HoD, and Central Lab approvals.",
    content: `## 1. SOP Title and Identifier
**SOP-ADM-01: Securing College Administrative Permissions**

## 2. Purpose
To ensure 100% administrative compliance with PRPCEM institutional authorities, preventing unapproved events, venue cancellations, or disciplinary reprimands.

## 3. Scope
All campus events, laboratory bookings, weekend lab sessions, and student attendance regularization requests.

## 4. Responsible Role
**President, MSC PRPCEM**

## 5. Prerequisites
- Complete event details: Title, Date, Timing, Venue, Expected Attendees, Speaker profile.
- Itemized budget projection.

## 6. Required Approvals
- Faculty Coordinator, MSC PRPCEM.
- Head of Department (HoD).
- Principal, PRPCEM.

## 7. Step-by-Step Procedure
1. **Draft Letter:** Generate formal typed letter using [Letter & Requisition Maker](#/tool/letter-generator).
2. **Review & Print:** Print 3 physical copies on clean A4 white paper.
3. **Faculty Endorsement:** Meet Faculty Coordinator in person, present event rationale, and obtain signature.
4. **HoD Endorsement:** Submit endorsed letter to HoD CSE/IT for department recommendation.
5. **Principal Submission:** Submit to the Principal's Administrative Office at least 14 days prior to event date.
6. **Inward Stamping:** Obtain the official inward register date stamp on your file copy.
7. **Collection:** Collect signed approved copy once cleared (typically within 48–72 hours).
8. **Archiving:** File physical copy in the official MSC PRPCEM Documentation Binder and distribute photocopies to Lab In-charge and AV technicians.

## 8. Expected Outcome
Signed, approved institutional permission letter officially authorizing the event.

## 9. Verification Checklist
- [ ] Letter submitted 14 days in advance.
- [ ] Inward stamp present on office copy.
- [ ] Principal signature obtained.
- [ ] Photocopy delivered to Lab In-Charge.

## 10. Exception Handling
If Principal requests syllabus or date modification, revise the letter immediately and resubmit within 24 hours.

## 11. Escalation Procedure
If a letter remains pending in administration past 5 working days, request Faculty Advisor to check status directly with Principal's PA.

## 12. Related Documents
- [CD-17: Approval and Administrative Escalation](#/doc/CD-17)
- [TMPL-14: Event Proposal Template](#/doc/TMPL-14)

## 13. Owner and Review Schedule
- **Owner:** President
- **Review Interval:** 180 Calendar Days

## 14. Revision History
| Version | Date | Author | Summary |
| :--- | :--- | :--- | :--- |
| 1.0.0 | 2026-10-15 | President | Initial canonical release |`
  }
];
