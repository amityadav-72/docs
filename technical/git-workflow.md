---
title: "Git & Branching Workflow"
description: "Branch naming conventions and lifecycles"
---

# Git & Branching Workflow

## Branch Naming Rules
- `main`: Production-ready code. Protected; direct pushes disabled.
- `develop`: Integration branch for active sprint features.
- `feature/[issue-id]-[description]`: New functionality (`feature/12-event-filter`).
- `fix/[issue-id]-[description]`: Bug remediation (`fix/45-cors-headers`).
- `docs/[doc-id]-[description]`: Documentation updates (`docs/gs-01-update`).

## Contributor Lifecycle
1. Pull latest integration code: `git checkout develop && git pull`.
2. Branch off: `git checkout -b feature/user-auth`.
3. Develop, test locally, and commit with Conventional Commits.
4. Push and open PR targeting `develop` or `main`.
