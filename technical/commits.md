---
title: "Conventional Commits"
description: "Commit message standards across all repositories"
---

# Conventional Commits Standard

## Format
```
<type>(<optional scope>): <description>
```

### Allowed Types
- `feat`: A new feature introduced to the application.
- `fix`: A bug remediation.
- `docs`: Documentation-only modifications.
- `style`: Formatting adjustments that do not alter code logic.
- `refactor`: Code restructuring without bug fixes or feature additions.
- `test`: Adding or updating automated tests.
- `chore`: Tooling, build config, or dependency updates.

### Examples
- `feat(events): add export to csv button for attendee list`
- `fix(auth): handle expired token error on refresh`
- `docs(readme): update local setup node version prerequisites`
