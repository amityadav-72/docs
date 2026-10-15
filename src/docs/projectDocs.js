export const projectDocs = [
  {
    id: "PRJ-01",
    title: "Club Project Documentation Standards",
    section: "Project Documentation",
    category: "05-project-documentation",
    owner: "Technical Lead",
    status: "Published",
    version: "1.0.0",
    lastReviewed: "2026-10-15",
    summary: "Mandatory documentation sections required for every club-maintained software application.",
    content: `## 1. Project Documentation Anatomy
Every software repository maintained under \`github.com/mscprpcem\` must provide:
1. **README.md:** Project Overview, target users, quick local setup, environment variables.
2. **Architecture Specification:** Component diagrams, database entity models, external API integrations.
3. **Deployment Runbook:** Build commands, environment configuration, production verification, and rollback procedure.
4. **Maintenance Manual:** Known issues, dependency update cadence, and project maintainer transition protocol.

## 2. Minimum Viable README Standard
A project without a clean, executable README will not be approved for release by the Technical Lead.`
  },
  {
    id: "PRJ-02",
    title: "Project Architecture Specification Guide",
    section: "Project Documentation",
    category: "05-project-documentation",
    owner: "Technical Lead",
    status: "Published",
    version: "1.0.0",
    lastReviewed: "2026-10-15",
    summary: "Instructions for drafting component diagrams, data flows, and database designs.",
    content: `## 1. Architectural Modeling Requirements
- **System Overview:** High-level summary of client-server interaction.
- **Component Diagram:** Use text-based Mermaid diagrams or SVG architecture diagrams.
- **Data Flow:** Trace user requests from client UI through reverse proxy, backend controllers, service layer, and database.
- **Security Boundaries:** Document authentication mechanisms (e.g., JWT, OAuth2) and CORS policies.`
  },
  {
    id: "PRJ-03",
    title: "Deployment Runbook Standards",
    section: "Project Documentation",
    category: "05-project-documentation",
    owner: "Technical Lead",
    status: "Published",
    version: "1.0.0",
    lastReviewed: "2026-10-15",
    summary: "Production release manuals, smoke tests, rollback steps, and monitoring configurations.",
    content: `## 1. Runbook Standard Format
- **Prerequisites:** Cloud CLI tools, environment secrets, domain DNS pointers.
- **Step-by-Step Deployment:** Exact build and release commands.
- **Post-Deploy Smoke Tests:** Endpoints or UI pages to verify immediately following deployment.
- **Rollback Protocol:** Step-by-step instructions to revert to the previous working commit if errors occur.`
  },
  {
    id: "PRJ-04",
    title: "Active Projects Registry",
    section: "Project Documentation",
    category: "05-project-documentation",
    owner: "Technical Lead",
    status: "Published",
    version: "1.0.0",
    lastReviewed: "2026-10-15",
    summary: "Authoritative directory of active software projects maintained by MSC PRPCEM.",
    content: `## 1. Active Projects Index
| Project Name | Repository | Primary Stack | Maintainers | Status |
| :--- | :--- | :--- | :--- | :--- |
| **MSC Documentation Portal** | \`mscprpcem/docs\` | React, Vite | Documentation Lead | Production |
| **Official Club Website** | \`mscprpcem/website\` | React, Node.js | Frontend Lead | Production |
| **Certificate Generator Tool** | \`mscprpcem/cert-gen\` | Python, Pillow | Technical Associate | Active |
| **InnovateX Hackathon Portal** | \`mscprpcem/innovatex\` | Next.js, Azure | Tech Lead | In Development |`
  }
];
