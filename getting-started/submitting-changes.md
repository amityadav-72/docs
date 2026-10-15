---
title: "How to Submit a Documentation Change"
description: "Editing documentation directly on GitHub"
---

# How to Submit a Documentation Change

Every document on this portal is a standard Markdown file stored in the GitHub repository. You can update documentation directly in GitHub without editing any JavaScript code!

## Method 1: Click "Edit this page on GitHub"
At the bottom of every page on this website, click the **"Edit this page on GitHub"** link:
1. You will be redirected directly to the `.md` file on GitHub.
2. Click the pencil icon (Edit) in the GitHub interface.
3. Make your edits in markdown format.
4. Click **Commit changes...**, describe your change, and open a Pull Request.

## Method 2: Local Git Workflow
1. Clone the repository:
```bash
git clone git@github.com:mscprpcem/docs.git
cd docs
```
2. Create an edit branch:
```bash
git checkout -b fix/sop-permissions-update
```
3. Edit the markdown file in your favorite editor (e.g., VS Code).
4. Commit using Conventional Commits:
```bash
git commit -m "docs(sops): update lab requisition inward steps"
git push -u origin fix/sop-permissions-update
```
5. Submit a Pull Request on GitHub. Once approved, the documentation website updates automatically!
