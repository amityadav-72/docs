export const policiesDocs = [
  {
    id: "POL-01",
    policyId: "POL-GOV-01",
    title: "Club Member Code of Conduct",
    section: "Policies and Guidelines",
    category: "08-policies-guidelines",
    owner: "Executive Board",
    status: "Published",
    version: "1.0.0",
    lastReviewed: "2026-10-15",
    summary: "Professional decorum, inclusive environment, and zero-tolerance harassment rules for all club members.",
    content: `## 1. Purpose
To maintain a safe, welcoming, respectful, and academically rigorous environment for all students participating in MSC PRPCEM activities regardless of gender, background, technical proficiency, or seniority.

## 2. Scope
Applies to all registered club members, core leads, student volunteers, and attendees participating in offline campus sessions or official digital channels.

## 3. Responsible Owner
**Executive Board & Faculty Advisor**

## 4. Effective Date and Review Interval
- **Effective Date:** August 01, 2026
- **Review Interval:** 365 Calendar Days (Annual)

## 5. Mandatory Rules and Requirements
- Treat every peer with dignity and respect. Constructive technical disagreement is encouraged; personal insults or mocking are prohibited.
- Zero tolerance for harassment, discrimination, hate speech, or unwelcome physical/verbal advances.
- Academic integrity: Submitting plagiarized code during club hackathons will result in immediate disqualification.
- Professionalism: Represent PRPCEM with decorum during interactions with external industry speakers.

## 6. Exceptions and Discretionary Relief
No exceptions to code of conduct standards are permitted.

## 7. Approval Authority
Faculty Advisor, MSC PRPCEM & College Disciplinary Committee.

## 8. Enforcement and Escalation
1. **First Incident:** Written warning issued by Executive Board.
2. **Second Incident:** Immediate revocation of club membership and dismissal from core responsibilities.
3. **Severe Violation:** Referral to College Disciplinary Committee for institutional reprimand.

## 9. Revision History
| Version | Date | Author | Description |
| :--- | :--- | :--- | :--- |
| 1.0.0 | 2026-10-15 | Executive Board | Initial approved policy |`
  },
  {
    id: "POL-02",
    policyId: "POL-DOC-01",
    title: "Official Documentation Policy",
    section: "Policies and Guidelines",
    category: "08-policies-guidelines",
    owner: "Documentation Lead",
    status: "Published",
    version: "1.0.0",
    lastReviewed: "2026-10-15",
    summary: "Single canonical location rule, factual accuracy mandate, and prohibitions on fabricated or secret content.",
    content: `## 1. Purpose
To establish binding standards for the creation, maintenance, and verification of all content published on \`docs.mscprpcem.tech\`.

## 2. Scope
All contributors, leads, and authors writing documentation for MSC PRPCEM.

## 3. Responsible Owner
**Documentation Lead, MSC PRPCEM**

## 4. Effective Date and Review Interval
- **Effective Date:** August 01, 2026
- **Review Interval:** 365 Calendar Days (Annual)

## 5. Mandatory Rules and Requirements
- **Factual Verification:** Never invent dates, speaker names, attendance metrics, or college approval facts.
- **Single Canonical Home:** Every document must have one canonical home. Do not copy-paste duplicate SOPs.
- **Zero Secrets:** Never publish credentials, passwords, or connection strings.
- **Actionable Prose:** Technical steps must be executable as written.

## 6. Exceptions and Discretionary Relief
Draft documents undergoing work may exist in branches or marked with \`status: "Draft"\`, but cannot be cited as authoritative.

## 7. Approval Authority
Documentation Lead & Technical Lead.

## 8. Enforcement and Escalation
PRs violating documentation standards will be closed with feedback.

## 9. Revision History
| Version | Date | Author | Description |
| :--- | :--- | :--- | :--- |
| 1.0.0 | 2026-10-15 | Documentation Lead | Initial approved policy |`
  },
  {
    id: "POL-11",
    policyId: "POL-SEC-03",
    title: "Secret Management and Credential Safety Policy",
    section: "Policies and Guidelines",
    category: "08-policies-guidelines",
    owner: "Technical Lead",
    status: "Published",
    version: "1.0.0",
    lastReviewed: "2026-10-15",
    summary: "Zero-secret git commit policy, API key protection, and credential revocation protocol.",
    content: `## 1. Purpose
To prevent catastrophic leaks of cloud infrastructure keys, database credentials, and API tokens into public or internal repositories.

## 2. Scope
All codebases, repositories, and documentation maintained by MSC PRPCEM.

## 3. Responsible Owner
**Technical Lead, MSC PRPCEM**

## 4. Effective Date and Review Interval
- **Effective Date:** August 01, 2026
- **Review Interval:** 90 Calendar Days (Quarterly)

## 5. Mandatory Rules and Requirements
- No secrets in code: API keys, database connection strings, Azure client secrets, and private SSH keys must never be committed to Git.
- \`.gitignore\` must explicitly exclude \`.env\`, \`.env.local\`, and credentials files.
- Automated secret scanning must remain enabled across all repositories under \`github.com/mscprpcem\`.
- All secret management must use encrypted GitHub Repository Secrets or Azure Key Vault.

## 6. Exceptions and Discretionary Relief
No exceptions. Even dummy test credentials in mock tests must be clearly fake strings (e.g., \`AKIAIOSFODNN7EXAMPLE\`).

## 7. Approval Authority
Technical Lead & Executive Board.

## 8. Enforcement and Escalation
If a secret is committed:
1. Immediately consider the secret compromised.
2. Revoke the key in the provider console (e.g., Azure Portal) within 15 minutes.
3. Rewrite Git history or squash commits to eliminate the exposed hash.

## 9. Revision History
| Version | Date | Author | Description |
| :--- | :--- | :--- | :--- |
| 1.0.0 | 2026-10-15 | Technical Lead | Initial approved policy |`
  }
];
