---
title: "React Application Standards"
description: "React component architecture and state rules"
---

# React Application Standards

## Architecture Rules
- Strictly functional components and React Hooks.
- Keep components modular and focused on a single responsibility (under 150 lines).
- Never mutate state directly; use functional state updates where dependent on previous values.
- Clean component directory layout: `/components`, `/hooks`, `/services`.
