---
title: "Secret Management Policy"
description: "Zero-secret git commit policy and token revocation"
---

# Secret Management & Credential Safety

## Zero-Secret Mandate
- **Never commit `.env` files:** All secrets must be stored in encrypted GitHub Repository Secrets or Azure Key Vault.
- If a secret key is accidentally pushed:
  1. Revoke the key in the provider console (e.g., Azure Portal) within 15 minutes.
  2. Rewrite git history or squash commit before merging.
