---
title: "POL-SEC-03: Secret Management"
description: "Zero-secret git commit policy"
---

# POL-SEC-03: Secret Management Policy

## 1. Purpose
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
- `.gitignore` must explicitly exclude `.env`, `.env.local`, and credentials files.
- Automated secret scanning must remain enabled across all repositories under `github.com/mscprpcem`.
- All secret management must use encrypted GitHub Repository Secrets or Azure Key Vault.

## 6. Exceptions and Discretionary Relief
No exceptions. Even dummy test credentials in mock tests must be clearly fake strings (e.g., `AKIAIOSFODNN7EXAMPLE`).

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
| 1.0.0 | 2026-10-15 | Technical Lead | Initial approved policy |
