---
title: "SOP-DEV-01: Project Approval"
description: "Creating and approving a new club project"
---

# SOP-DEV-01: Creating and Approving a New Club Project

## 1. SOP Title and Identifier
**SOP-DEV-01: Creating and Approving a New Club Project**

## 2. Purpose
To ensure that all software projects developed under MSC PRPCEM possess clear academic utility, feasible maintenance plans, proper licensing, and technical lead oversight before resource allocation.

## 3. Scope
Applies to all student proposals, web applications, tools, and contest platforms developed under the club banner.

## 4. Responsible Role
**Technical Lead, MSC PRPCEM**

## 5. Prerequisites
- Draft Project Proposal completed using `TMPL-06` (Problem statement, target audience, technical stack, maintainer roster).
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
5. **Repository Provisioning:** Technical Lead provisions a repository under `github.com/mscprpcem` following [SOP-DEV-02](/sops/repo-setup).
6. **Milestone Baseline:** Maintainers configure GitHub Milestones and initial issue board.

## 8. Expected Outcome
A newly approved repository on GitHub with initialized scaffolding, branch protection, CI/CD pipeline, and registered active maintainers.

## 9. Verification Checklist
- [ ] Project registered in Active Projects Registry.
- [ ] Open-source MIT License committed to repository root.
- [ ] Standard `README.md` and `.env.example` committed.
- [ ] Maintainers assigned `Triage` or `Write` permissions.

## 10. Exception Handling
If proposed stack requires unbudgeted cloud infrastructure, the proposal is paused until corporate sponsorship or college budget allocation is confirmed.

## 11. Escalation Procedure
Disputes regarding rejected project proposals are escalated to the President and Faculty Advisor for review.

## 12. Related Documents
- [SOP-DEV-02: Repo Setup](/sops/repo-setup)
- [Active Projects Registry](/project/active-registry)

## 13. Owner and Review Schedule
- **Owner:** Technical Lead
- **Review Interval:** 180 Calendar Days

## 14. Revision History
| Version | Date | Author | Summary |
| :--- | :--- | :--- | :--- |
| 1.0.0 | 2026-10-15 | Technical Lead | Initial canonical approved release |
