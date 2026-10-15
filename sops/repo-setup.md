---
title: "SOP-DEV-02: GitHub Repo Setup"
description: "Creating and configuring a GitHub repository"
---

# SOP-DEV-02: Creating and Configuring a GitHub Repository

## 1. SOP Title and Identifier
**SOP-DEV-02: Creating and Configuring a GitHub Repository**

## 2. Purpose
To ensure that all repositories under `github.com/mscprpcem` adhere to standardized naming, branch protection, license inclusion, and secret scanning.

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
1. **Create Repository:** Navigate to `github.com/organizations/mscprpcem/repositories/new`.
2. **Naming Convention:** Name using lowercase kebab-case (e.g., `portal-web`, `workshop-azure-bootcamp`).
3. **Visibility:** Set to **Public** unless containing unreleased competition problem statements.
4. **Initialize Files:** Check **Add README.md**, **Add .gitignore** (select Node/Python), and select **MIT License**.
5. **Configure Branch Protection:**
   - Go to **Settings > Branches > Add branch protection rule**.
   - Branch pattern: `main`.
   - Check: *Require a pull request before merging* (1 approval required).
   - Check: *Require status checks to pass before merging*.
   - Check: *Do not allow bypassing the above settings*.
6. **Enable Security Scanners:**
   - Go to **Settings > Code security and analysis**.
   - Enable: *Dependabot alerts*, *Dependabot security updates*, *Secret scanning*.
7. **Team Permissions:** Grant the designated project team `Write` access; general organization members retain `Read` access.

## 8. Expected Outcome
A securely initialized repository configured with automated security scanning and strict PR merge barriers.

## 9. Verification Checklist
- [ ] Branch protection active on `main`.
- [ ] Secret scanning enabled.
- [ ] Dependabot alerts active.
- [ ] Issue templates configured.

## 10. Exception Handling
If a repository is temporary (e.g., 2-day workshop demo), branch protection may be relaxed to allow direct lead commits, but secret scanning remains mandatory.

## 11. Escalation Procedure
Report access permission issues to the President.

## 12. Related Documents
- [SOP-DEV-01: Project Approval](/sops/project-approval)
- [Secret Management Policy](/policies/secret-management)

## 13. Owner and Review Schedule
- **Owner:** Technical Lead
- **Review Interval:** 180 Calendar Days

## 14. Revision History
| Version | Date | Author | Summary |
| :--- | :--- | :--- | :--- |
| 1.0.0 | 2026-10-15 | Technical Lead | Initial canonical approved release |
