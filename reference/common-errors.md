---
title: "Common Development Errors"
description: "Symptom and resolution lookup for common build and runtime errors"
---

# Common Development Errors Catalog

| Symptom / Error | Probable Root Cause | Remediation Step |
| :--- | :--- | :--- |
| `EADDRINUSE: port 5173` | Port is already bound by another background dev process | Run `npx kill-port 5173` or pass an alternative port `--port 5174` |
| `Node Sass / gyp compilation error` | Node.js version incompatible with native modules | Switch to LTS version: `nvm use 20` |
| `CORS header missing` | Backend API lacks CORS middleware for frontend origin | Add `cors({ origin: 'http://localhost:5173' })` to Express app |
| `Git push rejected (non-fast-forward)` | Remote branch contains commits not present locally | Run `git pull --rebase origin main` before pushing |
