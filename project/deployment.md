---
title: "Deployment Runbooks"
description: "Production release standards and rollbacks"
---

# Deployment Runbook Standards

## Mandatory Runbook Structure
Every production repository must maintain a deployment runbook specifying:
1. **Pre-flight Checks:** Cloud secrets, database migrations, domain SSL certificates.
2. **Step-by-step Release Commands:** Executable deployment script or GitHub Actions workflow.
3. **Smoke Tests:** Endpoints and UI checks to perform immediately following deployment.
4. **Rollback Instructions:** Exact command to revert to the previous working commit if errors occur.
