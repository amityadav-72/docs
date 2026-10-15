export const technicalDocs = [
  // 6.1 Development Documentation
  {
    id: "TECH-01",
    title: "Development Environment Setup",
    section: "Technical Documentation",
    category: "04-technical-documentation",
    owner: "Technical Lead",
    status: "Published",
    version: "1.0.0",
    lastReviewed: "2026-10-15",
    summary: "Standard workstation configurations, runtime baselines, and developer toolchains.",
    content: `## 1. Runtime Version Baselines
All developers contributing to MSC PRPCEM software projects must maintain the following minimum toolchains:
- **Node.js:** \`v20.x LTS\` or later.
- **npm:** \`v10.x\` or later.
- **Python:** \`v3.11.x\` or later.
- **Git:** \`v2.40+\` with SSH key authentication configured.
- **VS Code:** Recommended editor with official extensions (ESLint, Prettier, Tailwind CSS IntelliSense, GitLens).

## 2. Global Tool Verification
Run the following verification script in terminal:
\`\`\`bash
node -v
npm -v
git --version
python --version
\`\`\`

## 3. Git Identity Configuration
Ensure global Git identity matches your institutional or verified developer email:
\`\`\`bash
git config --global user.name "Your Full Name"
git config --global user.email "your.email@mscprpcem.tech"
git config --global init.defaultBranch main
\`\`\``
  },
  {
    id: "TECH-02",
    title: "Repository Structure and Conventions",
    section: "Technical Documentation",
    category: "04-technical-documentation",
    owner: "Technical Lead",
    status: "Published",
    version: "1.0.0",
    lastReviewed: "2026-10-15",
    summary: "Standardized directory layout for frontend, backend, and full-stack projects.",
    content: `## 1. Standard Project File Hierarchy
\`\`\`
project-root/
├── .github/
│   └── workflows/          # CI/CD automation pipelines
├── src/                    # Source code
│   ├── assets/             # Static media assets
│   ├── components/         # Reusable UI components
│   ├── services/           # API and data layer services
│   ├── utils/              # Helper utilities
│   └── App.jsx             # Root entry application
├── tests/                  # Automated unit and integration tests
├── .env.example            # Environment variable template
├── .gitignore              # Standard ignore file
├── LICENSE                 # MIT License
├── package.json            # Manifest and dependencies
└── README.md               # Standardized project documentation
\`\`\``
  },
  {
    id: "TECH-03",
    title: "Git and GitHub Procedures",
    section: "Technical Documentation",
    category: "04-technical-documentation",
    owner: "Technical Lead",
    status: "Published",
    version: "1.0.0",
    lastReviewed: "2026-10-15",
    summary: "Standard git clone, branching, and pull request workflows.",
    content: `## 1. Standard Contributor Workflow
1. Clone the repository:
\`\`\`bash
git clone git@github.com:mscprpcem/[repo-name].git
cd [repo-name]
\`\`\`
2. Install dependencies:
\`\`\`bash
npm install
\`\`\`
3. Create a feature branch:
\`\`\`bash
git checkout -b feature/login-authentication
\`\`\`
4. Commit changes following conventional commit syntax:
\`\`\`bash
git commit -m "feat(auth): implement student azure sso login"
\`\`\`
5. Push branch and open Pull Request:
\`\`\`bash
git push -u origin feature/login-authentication
\`\`\``
  },
  {
    id: "TECH-04",
    title: "Branching Strategy",
    section: "Technical Documentation",
    category: "04-technical-documentation",
    owner: "Technical Lead",
    status: "Published",
    version: "1.0.0",
    lastReviewed: "2026-10-15",
    summary: "Branch naming conventions, branch protection rules, and lifecycle.",
    content: `## 1. Branch Naming Rules
- \`main\`: Production-ready code. Strictly protected; direct pushes disabled.
- \`develop\`: Integration branch for active sprint features.
- \`feature/[issue-id]-[description]\`: New functionality (e.g., \`feature/12-event-filter\`).
- \`fix/[issue-id]-[description]\`: Bug remediation (e.g., \`fix/45-cors-headers\`).
- \`docs/[doc-id]-[description]\`: Documentation edits (e.g., \`docs/gs-01-update\`).`
  },
  {
    id: "TECH-05",
    title: "Commit Message Standards",
    section: "Technical Documentation",
    category: "04-technical-documentation",
    owner: "Technical Lead",
    status: "Published",
    version: "1.0.0",
    lastReviewed: "2026-10-15",
    summary: "Conventional Commits specification enforced across all club codebases.",
    content: `## 1. Format
\`\`\`
<type>(<optional scope>): <description>
\`\`\`

### Authorized Types:
- \`feat\`: A new feature introduced to the application.
- \`fix\`: A bug remediation.
- \`docs\`: Documentation-only modifications.
- \`style\`: Code formatting adjustments that do not alter logic.
- \`refactor\`: Code restructuring without bug fixes or feature additions.
- \`test\`: Addition or modification of automated tests.
- \`chore\`: Routine tooling or dependency maintenance.

### Examples:
- \`feat(events): add export to csv button for attendee list\`
- \`fix(auth): handle expired token error on refresh\`
- \`docs(readme): update local setup node version prerequisites\``
  },
  {
    id: "TECH-06",
    title: "Pull Request and Code Review Procedures",
    section: "Technical Documentation",
    category: "04-technical-documentation",
    owner: "Technical Lead",
    status: "Published",
    version: "1.0.0",
    lastReviewed: "2026-10-15",
    summary: "PR templates, test proofs, review etiquette, and approval gates.",
    content: `## 1. Pull Request Requirements
Every PR must contain:
- Reference to the corresponding GitHub Issue (\`Closes #12\`).
- Clear bullet list of changes implemented.
- Proof of test: Screenshot or CLI log confirming successful build and test run.
- At least 1 approving review from the Technical Lead before merging.`
  },
  {
    id: "TECH-07",
    title: "Error Handling and Logging Standards",
    section: "Technical Documentation",
    category: "04-technical-documentation",
    owner: "Technical Lead",
    status: "Published",
    version: "1.0.0",
    lastReviewed: "2026-10-15",
    summary: "Structured JSON logging, log levels, and PII protection rules.",
    content: `## 1. Logging Standards
- Never log sensitive data (passwords, JWT tokens, personal student mobile numbers).
- Use structured log levels: \`INFO\` for state transitions, \`WARN\` for recoverable anomalies, \`ERROR\` for failed operations.
- Backend APIs must return uniform JSON error responses:
\`\`\`json
{
  "error": {
    "code": "BAD_REQUEST",
    "message": "Invalid student registration ID format."
  }
}
\`\`\``
  },
  {
    id: "TECH-08",
    title: "Dependency Management and Security Audits",
    section: "Technical Documentation",
    category: "04-technical-documentation",
    owner: "Technical Lead",
    status: "Published",
    version: "1.0.0",
    lastReviewed: "2026-10-15",
    summary: "Package installation rules, lockfile preservation, and security scanning.",
    content: `## 1. Package Installation Rules
- Always commit \`package-lock.json\` or equivalent lockfiles.
- Never install unmaintained packages (zero releases in 24 months).
- Run automated security audit before PR submission:
\`\`\`bash
npm audit
\`\`\``
  },
  {
    id: "TECH-09",
    title: "Development Troubleshooting Guide",
    section: "Technical Documentation",
    category: "04-technical-documentation",
    owner: "Technical Lead",
    status: "Published",
    version: "1.0.0",
    lastReviewed: "2026-10-15",
    summary: "Common development errors, port collisions, and resolution steps.",
    content: `## 1. Common Failures & Fixes
| Error | Probable Cause | Fix |
| :--- | :--- | :--- |
| \`EADDRINUSE: port 5173\` | Port already bound by another process | Run \`npx kill-port 5173\` or specify alternate port |
| \`Node Sass does not support current environment\` | Node.js version mismatch | Switch to supported LTS version using \`nvm use 20\` |
| \`CORS header 'Access-Control-Allow-Origin' missing\` | Backend API lacks CORS middleware | Configure Express cors middleware with frontend origin |`
  },

  // 6.2 Programming and Framework Documentation
  {
    id: "TECH-10",
    title: "JavaScript and TypeScript Standards",
    section: "Technical Documentation",
    category: "04-technical-documentation",
    owner: "Technical Lead",
    status: "Published",
    version: "1.0.0",
    lastReviewed: "2026-10-15",
    summary: "ES6+ standards, TypeScript interface conventions, and linting rules.",
    content: `## 1. Standards
- Use modern ES6+ syntax (arrow functions, template literals, destructuring, optional chaining).
- Always prefer \`const\` over \`let\`; never use \`var\`.
- In TypeScript projects, explicitly type all function parameters and return values; avoid \`any\`.`
  },
  {
    id: "TECH-11",
    title: "React Application Standards",
    section: "Technical Documentation",
    category: "04-technical-documentation",
    owner: "Technical Lead",
    status: "Published",
    version: "1.0.0",
    lastReviewed: "2026-10-15",
    summary: "Component structure, hooks usage, and state management conventions.",
    content: `## 1. React Architecture
- Strictly use functional components and React Hooks; class components are deprecated.
- Keep components modular (single responsibility under 150 lines).
- Never mutate state directly; use functional state updates where dependent on previous state.`
  },
  {
    id: "TECH-12",
    title: "Node.js and Express API Standards",
    section: "Technical Documentation",
    category: "04-technical-documentation",
    owner: "Technical Lead",
    status: "Published",
    version: "1.0.0",
    lastReviewed: "2026-10-15",
    summary: "REST API controller patterns, middleware ordering, and route validation.",
    content: `## 1. Controller Architecture
Separate routing logic from business logic:
- \`/routes\`: Define HTTP endpoint mappings and attach middleware.
- \`/controllers\`: Handle incoming request parsing and return standard HTTP responses.
- \`/services\`: Encapsulate database interactions and business calculations.`
  },
  {
    id: "TECH-13",
    title: "Python and FastAPI Standards",
    section: "Technical Documentation",
    category: "04-technical-documentation",
    owner: "Technical Lead",
    status: "Published",
    version: "1.0.0",
    lastReviewed: "2026-10-15",
    summary: "Virtual environments, Pydantic data schemas, and type annotations.",
    content: `## 1. Standards
- Always develop inside a virtual environment (\`python -m venv .venv\`).
- Use Pydantic models for incoming request validation and response schemas.
- Format all code with Black (\`black .\`) before committing.`
  },
  {
    id: "TECH-14",
    title: "SQL and Database Design Standards",
    section: "Technical Documentation",
    category: "04-technical-documentation",
    owner: "Technical Lead",
    status: "Published",
    version: "1.0.0",
    lastReviewed: "2026-10-15",
    summary: "Relational schema design, snake_case naming, foreign keys, and migration scripts.",
    content: `## 1. Database Conventions
- Table names: Plural snake_case (e.g., \`club_events\`, \`student_members\`).
- Primary keys: Integer autoincrement \`id\` or UUID.
- Foreign keys: Explicitly indexed with cascading delete policies defined.
- Always manage schema updates via migration tools (e.g., Prisma, Flyway, Knex).`
  },
  {
    id: "TECH-15",
    title: "REST API Design Guidelines",
    section: "Technical Documentation",
    category: "04-technical-documentation",
    owner: "Technical Lead",
    status: "Published",
    version: "1.0.0",
    lastReviewed: "2026-10-15",
    summary: "HTTP methods, standard status code mappings, and pagination patterns.",
    content: `## 1. Status Code Standards
- \`200 OK\`: Successful GET, PUT, PATCH.
- \`201 Created\`: Successful POST creating a resource.
- \`400 Bad Request\`: Malformed syntax or schema validation failure.
- \`401 Unauthorized\`: Missing or invalid authentication token.
- \`403 Forbidden\`: Authenticated user lacks permission.
- \`404 Not Found\`: Target resource does not exist.
- \`500 Internal Error\`: Unhandled server exception.`
  },

  // 6.3 Cloud Documentation
  {
    id: "TECH-16",
    title: "Microsoft Azure Environment and Standards",
    section: "Technical Documentation",
    category: "04-technical-documentation",
    owner: "Cloud & DevOps Lead",
    status: "Published",
    version: "1.0.0",
    lastReviewed: "2026-10-15",
    summary: "Resource naming conventions, Azure App Services, and subscription limits.",
    content: `## 1. Azure Resource Naming Conventions
\`\`\`
[resource-type]-[project]-[environment]-[region]
\`\`\`
### Examples:
- \`rg-mscdocs-prod-centralindia\`: Production Resource Group for Docs portal.
- \`app-mscportal-dev-centralindia\`: Azure App Service for development portal.
- \`st-mscmedia-prod-centralindia\`: Azure Blob Storage for media assets.

## 2. Resource Group Rules
- Every project must reside in its own dedicated Resource Group.
- Never mix production resources with temporary workshop testing resources.`
  },
  {
    id: "TECH-17",
    title: "Azure Cloud Cost Control and Spending Limits",
    section: "Technical Documentation",
    category: "04-technical-documentation",
    owner: "Cloud & DevOps Lead",
    status: "Published",
    version: "1.0.0",
    lastReviewed: "2026-10-15",
    summary: "Automated spend caps, monthly budgets, and idle resource decommissioning.",
    content: `## 1. Spending Cap Policies
- All student Azure subscriptions must have a strict budget cap configured.
- Automated email alerts triggered at 50%, 75%, and 90% of allocated credit limit.
- All temporary lab/hackathon resources must be deleted within 24 hours of event completion.`
  },
  {
    id: "TECH-18",
    title: "Cloud Security and Secret Management",
    section: "Technical Documentation",
    category: "04-technical-documentation",
    owner: "Technical Lead",
    status: "Published",
    version: "1.0.0",
    lastReviewed: "2026-10-15",
    summary: "GitHub Secrets, Azure Key Vault integration, and zero-secret commit rules.",
    content: `## 1. Mandatory Security Rules
- **Zero Secrets in Git:** Never commit \`.env\` files, Azure connection strings, or private tokens.
- **GitHub Secrets:** CI/CD deployment tokens must be stored in encrypted GitHub Secrets.
- If a secret is accidentally committed, it must be considered compromised immediately and revoked.`
  },

  // 6.4 Tools and Platforms
  {
    id: "TECH-19",
    title: "GitHub Organization Administration",
    section: "Technical Documentation",
    category: "04-technical-documentation",
    owner: "Technical Lead",
    status: "Published",
    version: "1.0.0",
    lastReviewed: "2026-10-15",
    summary: "Admin governance of github.com/mscprpcem, member 2FA, and teams.",
    content: `## 1. Admin Policies
- Mandatory Two-Factor Authentication (2FA) enforced for all members of \`github.com/mscprpcem\`.
- Owner privileges restricted strictly to the current President and Technical Lead.
- Team allocations: \`tech-leads\`, \`frontend-team\`, \`backend-team\`, \`docs-maintainers\`.`
  },
  {
    id: "TECH-20",
    title: "Repository Administration and Branch Protection",
    section: "Technical Documentation",
    category: "04-technical-documentation",
    owner: "Technical Lead",
    status: "Published",
    version: "1.0.0",
    lastReviewed: "2026-10-15",
    summary: "Mandatory repo configurations, branch protection settings, and automated scanners.",
    content: `## 1. Default Branch Protection Rules
- Require pull request before merging (minimum 1 approval).
- Dismiss stale pull request approvals when new commits are pushed.
- Require status checks to pass before merging (GitHub Actions build & test).
- Do not allow bypassing the above settings.`
  }
];
