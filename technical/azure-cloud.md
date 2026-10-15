---
title: "Microsoft Azure Environment & Standards"
description: "Cloud resource naming, App Service, and storage rules"
---

# Microsoft Azure Environment & Standards

## Resource Naming Conventions
```
[resource-type]-[project]-[environment]-[region]
```

### Official Examples
- `rg-mscdocs-prod-centralindia`: Resource Group for Docs portal.
- `app-mscportal-prod-centralindia`: Production Azure App Service.
- `st-mscmedia-prod-centralindia`: Production Azure Blob Storage.

## Security Baseline
- IAM least privilege access: Members receive Contributor or Reader roles.
- Dedicated resource groups per project; no shared test/prod groups.
