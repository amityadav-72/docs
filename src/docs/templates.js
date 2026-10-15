export const templatesDocs = [
  {
    id: "TMPL-01",
    templateId: "TMPL-GEN-01",
    title: "General Document Template",
    section: "Templates and Standards",
    category: "09-templates-standards",
    owner: "Documentation Lead",
    status: "Published",
    version: "1.0.0",
    lastReviewed: "2026-10-15",
    summary: "Standard template for general club guides, process overviews, and non-SOP documentation.",
    content: `## 1. Markdown Template Schema
\`\`\`markdown
---
id: "DOC-XXX-01"
title: "[Document Title]"
section: "[Main Section Name]"
category: "[category-slug]"
owner: "[Domain Lead Title]"
status: "Draft | In Review | Approved | Published | Needs Update | Archived"
version: "1.0.0"
lastReviewed: "YYYY-MM-DD"
summary: "[One-sentence summary of document purpose]"
---

## 1. Purpose
State the clear objective and rationale for this document.

## 2. Scope
Specify who, which teams, and which systems this document governs.

## 3. Main Guidelines / Content
Detailed structured content broken into numbered sections.

## 4. Key Responsibilities
Itemized duties associated with this document.

## 5. Related Documents
- [Related Document Title](relative-path)

## 6. Revision History
| Version | Date | Author | Description of Changes |
| :--- | :--- | :--- | :--- |
| 1.0.0 | YYYY-MM-DD | Name (Role) | Initial publication |
\`\`\``
  },
  {
    id: "TMPL-05",
    templateId: "TMPL-TECH-05",
    title: "Architectural Decision Record (ADR) Template",
    section: "Templates and Standards",
    category: "09-templates-standards",
    owner: "Technical Lead",
    status: "Published",
    version: "1.0.0",
    lastReviewed: "2026-10-15",
    summary: "Template for documenting significant technical, framework, or architectural choices.",
    content: `## 1. Markdown Template Schema
\`\`\`markdown
# ADR [Number]: [Title of Decision]

## Status
Proposed | Accepted | Deprecated | Superseded by [ADR-XXX]

## Context
What technical challenge or system constraint prompted this decision?

## Decision
What is the chosen approach, technology, or architectural pattern?

## Consequences
### Positive:
- Benefit 1
- Benefit 2

### Negative / Trade-offs:
- Trade-off 1
- Mitigation strategy

## Stakeholders & Approvals
- Proposed by: [Name, Role]
- Approved by: [Technical Lead, Date]
\`\`\``
  },
  {
    id: "TMPL-13",
    templateId: "TMPL-OPS-13",
    title: "Minutes of Meeting (MoM) Template",
    section: "Templates and Standards",
    category: "09-templates-standards",
    owner: "Documentation Lead",
    status: "Published",
    version: "1.0.0",
    lastReviewed: "2026-10-15",
    summary: "Standard template for recording executive scrums, agendas, and action items.",
    content: `## 1. Markdown Template Schema
\`\`\`markdown
# Minutes of Meeting: [Meeting Title]

- **Date & Time:** YYYY-MM-DD | HH:MM AM/PM
- **Meeting Chair:** [Name, Role]
- **Minutes Recorded By:** [Name, Role]
- **Attendees:** [List of attendees]
- **Absent:** [List of excused/absent members]

---

## 1. Agenda Items Discussed
1. Item 1
2. Item 2

## 2. Key Decisions Made
- **Decision 1:** [Details and rationale]

## 3. Action Items and Ownership
| Action Item | Assigned Owner | Deadline | Status |
| :--- | :--- | :--- | :--- |
| Submit hall letter to Principal | Operations Lead | YYYY-MM-DD | In Progress |
| Release workshop starter repo | Tech Lead | YYYY-MM-DD | Open |

## 4. Next Meeting Scheduled
- **Date:** YYYY-MM-DD
- **Tentative Agenda:** [Topics]
\`\`\``
  },
  {
    id: "TMPL-19",
    templateId: "TMPL-SOP-19",
    title: "Standard Operating Procedure (SOP) Template",
    section: "Templates and Standards",
    category: "09-templates-standards",
    owner: "Documentation Lead",
    status: "Published",
    version: "1.0.0",
    lastReviewed: "2026-10-15",
    summary: "The canonical 14-field template required for all Standard Operating Procedures.",
    content: `## 1. Markdown Template Schema
\`\`\`markdown
# [SOP Title] ([SOP Identifier])

## 1. SOP Title and Identifier
**[SOP-DOM-XX]: [Full Descriptive Title]**

## 2. Purpose
Crisp explanation of why this procedure exists and what failure it prevents.

## 3. Scope
Boundaries, participating teams, and applicable scenarios.

## 4. Responsible Role
Single executive role accountable for executing this procedure.

## 5. Prerequisites
Mandatory preconditions before beginning Step 1.

## 6. Required Approvals
Signed authorities needed before execution.

## 7. Step-by-Step Procedure
1. **Step 1:** Explicit instruction.
2. **Step 2:** Explicit instruction.

## 8. Expected Outcome
Factual definition of successful execution.

## 9. Verification Checklist
- [ ] Verification item 1
- [ ] Verification item 2

## 10. Exception Handling
Contingency steps if an anomaly or failure occurs.

## 11. Escalation Procedure
Whom to contact and within what time window if unresolvable.

## 12. Related Documents
- [Related Document Title](relative-path)

## 13. Owner and Review Schedule
- **Owner:** [Role]
- **Review Interval:** 180 Calendar Days

## 14. Revision History
| Version | Date | Author | Summary |
| :--- | :--- | :--- | :--- |
| 1.0.0 | YYYY-MM-DD | Name (Role) | Initial canonical release |
\`\`\``
  }
];
