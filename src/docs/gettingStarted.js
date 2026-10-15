export const gettingStartedDocs = [
  {
    id: "GS-01",
    title: "Documentation Portal Overview",
    section: "Getting Started",
    category: "01-getting-started",
    owner: "Documentation Lead",
    status: "Published",
    version: "1.0.0",
    lastReviewed: "2026-10-15",
    summary: "Mandate, scope, and editorial rules governing the official MSC PRPCEM Documentation Website.",
    content: `## 1. Purpose and Mandate
The MSC PRPCEM Documentation Website (\`docs.mscprpcem.tech\`) is the single authoritative knowledge repository for the Microsoft Student Club at P. R. Pote (Patil) College of Engineering and Management, Amravati.

Its exclusive mandate is to document:
- How technical systems and software projects are engineered, deployed, and maintained.
- Standard Operating Procedures (SOPs) for administrative permissions, venue bookings, and events.
- Core team domain charters, responsibilities, and key performance indicators (KPIs).
- Institutional policies, data privacy guidelines, and code quality standards.
- Reusable templates and verified campus reference directories.

## 2. Intended Audience
This portal is strictly intended for **authorized club members, executive leads, student developers, and faculty advisors** of MSC PRPCEM. It is not an open public blog, external learning management system (LMS), or event registration platform.

## 3. Explicit Non-Goals
To preserve operational clarity, this repository strictly excludes:
- **No Courseware / Tutorials:** We do not host generic external technology courses or learning roadmaps.
- **No Event Ticketing:** External attendee registrations and ticketing are managed via authorized event platforms.
- **No Secret Storage:** Plaintext API keys, passwords, database credentials, or Azure cloud tokens are strictly prohibited.
- **No Speculative or Fabricated Information:** Content must reflect verified club processes and approved policies.

## 4. Editorial Philosophy: Single Canonical Location
Every process or policy exists in exactly **one canonical location**. Cross-referencing between sections is achieved via structured document links rather than duplicate text.

## 5. Related Documents
- [GS-02: How to Navigate the Documentation](#/doc/GS-02)
- [GS-03: Documentation Categories and Naming Conventions](#/doc/GS-03)
- [POL-02: Official Documentation Policy](#/doc/POL-02)`
  },
  {
    id: "GS-02",
    title: "How to Navigate the Documentation",
    section: "Getting Started",
    category: "01-getting-started",
    owner: "Documentation Lead",
    status: "Published",
    version: "1.0.0",
    lastReviewed: "2026-10-15",
    summary: "Structure of repository hierarchy, sidebar navigation, search shortcuts, and on-page anchors.",
    content: `## 1. Structural Taxonomy
The repository is structured into 11 top-level domains:
1. **Getting Started:** Authoring guides, navigation rules, and review workflows.
2. **Club Documentation:** Organizational charter, administrative protocols, and annual planning.
3. **Team Documentation:** Operating workflows for Technical, Operations, and Documentation domains.
4. **Technical Documentation:** Development baselines, Azure cloud configurations, and API standards.
5. **Project Documentation:** Software architecture, deployment runbooks, and project READMEs.
6. **Event Documentation:** 6-phase event planning, workshop lab guides, and verified event archives.
7. **Standard Operating Procedures (SOPs):** Canonical 14-field actionable checklists for recurring tasks.
8. **Policies and Guidelines:** Binding club rules, code review standards, and data privacy baselines.
9. **Templates and Standards:** Reusable markdown templates for all document classes.
10. **Reference Documentation:** Acronym lookups, common error catalogs, and campus support contacts.
11. **Archive and Revision History:** Historical tenure records and superseded procedures.

## 2. Navigation Tools
- **Collapsible Sidebar:** Groups documents by functional domain with status badges.
- **Global Search:** Accessible via the search bar or the keyboard shortcut \`Ctrl+K\` / \`Cmd+K\`.
- **Breadcrumb Trail:** Displays current location within the organizational hierarchy.
- **Table of Contents:** Located in the document view for jumping to major headings.

## 3. Related Documents
- [GS-04: How to Find a Document](#/doc/GS-04)
- [REF-07: Official Document Identifier Directory](#/doc/REF-07)`
  },
  {
    id: "GS-03",
    title: "Documentation Categories and Naming Conventions",
    section: "Getting Started",
    category: "01-getting-started",
    owner: "Documentation Lead",
    status: "Published",
    version: "1.0.0",
    lastReviewed: "2026-10-15",
    summary: "Standard document numbering scheme, category identifiers, and file naming rules.",
    content: `## 1. Document Identifier Scheme
Every document possesses a unique alphanumeric identifier formatted as:
\`\`\`
[DOMAIN_PREFIX]-[SEQUENCE_NUMBER]
\`\`\`

### Authorized Domain Prefixes:
- \`GS\`: Getting Started
- \`CD\`: Club Documentation
- \`TD\`: Team Documentation
- \`TECH\`: Technical Documentation
- \`PRJ\`: Project Documentation
- \`EVT\`: Event Documentation
- \`SOP\`: Standard Operating Procedures
- \`POL\`: Policies and Guidelines
- \`TMPL\`: Templates and Standards
- \`REF\`: Reference Documentation
- \`ARC\`: Archive and Revision History

## 2. File Naming Rules
- **Casing:** Strictly lowercase kebab-case (e.g., \`sop-event-workshop-planning.md\`).
- **Characters:** Only alphanumeric ASCII characters and hyphens (\`-\`). No spaces or underscores.
- **Prefix:** File names must be prefixed by their sequence or subcategory for deterministic alphabetical sorting.

## 3. Related Documents
- [TMPL-01: General Document Template](#/doc/TMPL-01)
- [REF-07: Official Document Identifier Directory](#/doc/REF-07)`
  },
  {
    id: "GS-04",
    title: "How to Find a Document",
    section: "Getting Started",
    category: "01-getting-started",
    owner: "Documentation Lead",
    status: "Published",
    version: "1.0.0",
    lastReviewed: "2026-10-15",
    summary: "Techniques for finding procedures, templates, and technical specifications rapidly.",
    content: `## 1. Search Strategies
- **By Document ID:** Enter exact identifiers (e.g., \`SOP-05\` or \`POL-01\`) in the top search bar.
- **By Workflow Keyword:** Query specific operational terms such as \`principal permission\`, \`azure setup\`, or \`runbook\`.
- **By Domain Category:** Browse the categorized sidebar under relevant headers (e.g., \`07. Standard Operating Procedures\`).

## 2. Triage for Missing Content
If a required procedure or specification cannot be found:
1. Verify if the document has been superseded under **Section 11: Archive and Revision History**.
2. Check the **REF-07 Identifier Directory** to verify if the document is currently in \`Draft\` status.
3. Submit a documentation request following [GS-05: How to Create a New Document](#/doc/GS-05).`
  },
  {
    id: "GS-05",
    title: "How to Create a New Document",
    section: "Getting Started",
    category: "01-getting-started",
    owner: "Documentation Lead",
    status: "Published",
    version: "1.0.0",
    lastReviewed: "2026-10-15",
    summary: "Step-by-step authoring workflow for contributing a new page to the documentation repository.",
    content: `## 1. Authoring Procedure
1. **Identify Canonical Home:** Determine the correct category from Section 1 to 11. Confirm no duplicate document already exists.
2. **Obtain Document Identifier:** Reference [REF-07](#/doc/REF-07) to allocate the next sequential Document ID.
3. **Select Template:** Copy the appropriate template from **Section 09: Templates and Standards** (e.g., \`TMPL-01\` for general docs, \`TMPL-19\` for SOPs).
4. **Draft Content:** Write concise, factual markdown adhering to the 14-point SOP or 9-point Policy schema where applicable.
5. **Set Initial Status:** Tag frontmatter metadata with \`status: "Draft"\` and assign the appropriate domain lead as \`owner\`.
6. **Submit PR:** Submit a Pull Request targeting the \`main\` branch with prefix \`docs(category): add [Doc ID]\`.

## 2. Mandatory Verification
Before submitting, ensure:
- Zero credentials, plaintext secrets, or personal numbers are present.
- All code blocks have language syntax specifiers.
- All internal relative links are valid.`
  },
  {
    id: "GS-06",
    title: "How to Submit a Documentation Change",
    section: "Getting Started",
    category: "01-getting-started",
    owner: "Documentation Lead",
    status: "Published",
    version: "1.0.0",
    lastReviewed: "2026-10-15",
    summary: "Protocol for proposing updates, corrections, or expansions to existing documentation.",
    content: `## 1. Minor Edits (Typo, Dead Link, Clarification)
- Fork the repository or create a branch: \`fix/docs-[id]-clarification\`.
- Apply targeted line edits without altering document structure.
- Update the document's \`Revision History\` table incrementing the patch version (e.g., \`1.0.0\` to \`1.0.1\`).
- Submit PR for review by the assigned document owner.

## 2. Major Edits (Procedure Change, Policy Revision)
- Open an Issue describing the operational change and reason for updating.
- Tag the respective Domain Lead (Tech, Operations, or President).
- Update the document content and increment minor/major version (\`1.0.0\` to \`1.1.0\`).
- Requires approval from the Document Owner and Faculty Advisor (if policy-related).`
  },
  {
    id: "GS-07",
    title: "Documentation Review and Approval Process",
    section: "Getting Started",
    category: "01-getting-started",
    owner: "Documentation Lead",
    status: "Published",
    version: "1.0.0",
    lastReviewed: "2026-10-15",
    summary: "Editorial review gates, verification standards, and approval authorities.",
    content: `## 1. Review Stages
1. **Peer Review:** Technical verification by a domain peer (confirms code commands work as written).
2. **Lead Review:** Domain Lead verifies adherence to club standards, safety, and college policies.
3. **Editorial Review:** Documentation Lead verifies formatting, frontmatter, and link integrity.
4. **Approval & Publication:** Document is marked \`status: "Published"\` and merged.

## 2. Rejection Criteria
PRs will be blocked if they contain:
- Unverified statements or fabricated event details.
- Plaintext API tokens, connection strings, or private keys.
- Vague operational steps like "perform necessary actions" without explicit steps.
- Missing required fields in SOPs or Policies.`
  },
  {
    id: "GS-08",
    title: "Document Ownership and Responsibilities",
    section: "Getting Started",
    category: "01-getting-started",
    owner: "Documentation Lead",
    status: "Published",
    version: "1.0.0",
    lastReviewed: "2026-10-15",
    summary: "Ongoing maintenance obligations assigned to document owners and domain leads.",
    content: `## 1. Owner Responsibilities
Every document has an assigned domain owner (e.g., Technical Lead, Event Operations Lead, President). The owner is strictly accountable for:
- Performing scheduled reviews before the \`lastReviewed\` expiration window.
- Updating commands, package versions, and college protocols as they evolve.
- Triage of reported inaccuracies within 48 hours of notification.
- Formally transitioning ownership to the incoming lead during year-end succession.`
  },
  {
    id: "GS-09",
    title: "Document Versioning and Revision History",
    section: "Getting Started",
    category: "01-getting-started",
    owner: "Documentation Lead",
    status: "Published",
    version: "1.0.0",
    lastReviewed: "2026-10-15",
    summary: "Semantic versioning standards for documentation assets.",
    content: `## 1. Versioning Standard
Documents follow Semantic Versioning for text (\`MAJOR.MINOR.PATCH\`):
- **MAJOR (v2.0.0):** Complete structural overhaul, replacement of procedure, or major policy change.
- **MINOR (v1.1.0):** Addition of new steps, checklists, or updated command examples.
- **PATCH (v1.0.1):** Typographical fixes, dead link corrections, or wording clarifications.

## 2. Mandatory Changelog Table
Every document must end with a Revision History table recording version, date, author, and description of change.`
  },
  {
    id: "GS-10",
    title: "Reporting Incorrect or Outdated Documentation",
    section: "Getting Started",
    category: "01-getting-started",
    owner: "Documentation Lead",
    status: "Published",
    version: "1.0.0",
    lastReviewed: "2026-10-15",
    summary: "Issue reporting mechanism for factual errors, broken commands, or obsolete policies.",
    content: `## 1. Discrepancy Reporting Protocol
When an error, outdated command, or broken link is discovered:
1. Open a GitHub Issue on \`github.com/mscprpcem/docs\` using the **Documentation Issue Template**.
2. Specify:
   - Document ID and Title.
   - Exact line or section with the discrepancy.
   - Verified current facts or replacement command.
3. The Documentation Lead will mark the document status as \`Needs Update\` until resolved.`
  }
];
