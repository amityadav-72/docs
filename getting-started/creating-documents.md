---
title: "How to Create a New Document"
description: "Authoring guidelines for adding markdown documents"
---

# How to Create a New Document

## Step-by-Step Document Creation

1. **Pick the Correct Directory:** Determine which section the document belongs to (e.g., `/sops/`, `/technical/`, `/events/`).
2. **Create Markdown File:** Create a new `.md` file with a kebab-case name (e.g., `docker-setup.md`).
3. **Add Frontmatter Header:**
```markdown
---
title: "My Document Title"
description: "Brief summary of what this document covers"
---
```
4. **Draft Content:** Write in clear, structured markdown. For SOPs, adhere to the 14-point schema; for Policies, adhere to the 9-point schema.
5. **Update Sidebar Config:** Add the new page link to `.vitepress/config.mjs` under the corresponding category.
6. **Submit PR:** Commit the new markdown file and open a Pull Request on GitHub.
