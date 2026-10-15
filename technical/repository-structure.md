---
title: "Repository Structure"
description: "Standard directory layout for club codebases"
---

# Repository Structure Conventions

## Standard Project Layout
```
project-root/
├── .github/
│   └── workflows/          # GitHub Actions CI/CD pipelines
├── src/                    # Source code
│   ├── components/         # Reusable UI components
│   ├── services/           # API and data layer services
│   └── App.jsx             # Entry application
├── tests/                  # Automated unit and integration tests
├── .env.example            # Environment variable template
├── .gitignore              # Standard git ignore file
├── LICENSE                 # MIT License
├── package.json            # Manifest and dependencies
└── README.md               # Standardized project documentation
```

## Mandatory Root Files
- **`README.md`:** Overview, local development setup commands, architecture summary.
- **`.env.example`:** List of all required configuration keys without secret values.
- **`LICENSE`:** Standard open-source MIT License.
