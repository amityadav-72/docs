import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'MSC PRPCEM Docs',
  description: 'Official Documentation & Operating Procedures for Microsoft Student Club PRPCEM (docs.mscprpcem.tech)',
  cleanUrls: true,
  lastUpdated: true,

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/msc-logo.svg' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap' }]
  ],

  themeConfig: {
    siteTitle: 'MSC PRPCEM',
    logo: '/msc-logo.svg',
    
    // Top Navigation Bar (Removed as requested, single unified left sidebar navigation)
    nav: [],

    // Left Sidebar Navigation
    sidebar: {
      '/': [
        {
          text: 'Introduction',
          collapsed: false,
          items: [
            { text: 'About MSC PRPCEM', link: '/' },
            { text: 'Club Purpose & Overview', link: '/club/' },
            { text: 'Mission & Objectives', link: '/club/mission' },
            { text: 'Leadership Structure', link: '/club/leadership' },
            { text: 'Roles & Responsibilities', link: '/club/roles' },
            { text: 'Technical Domains', link: '/club/technical-domains' },
            { text: 'Annual Planning Roadmap', link: '/club/annual-planning' }
          ]
        },
        {
          text: '2. Club Documentation',
          collapsed: true,
          items: [
            { text: 'Club Overview & Purpose', link: '/club/' },
            { text: 'Mission & Objectives', link: '/club/mission' },
            { text: 'Institutional Relations', link: '/club/institutional-relations' },
            { text: 'Technical Domains', link: '/club/technical-domains' },
            { text: 'Compliance & Safety', link: '/club/compliance' },
            { text: 'Leadership Structure', link: '/club/leadership' },
            { text: 'Roles & Responsibilities', link: '/club/roles' },
            { text: 'Decision Making Guidelines', link: '/club/decision-making' },
            { text: 'Leadership Handover', link: '/club/handover' },
            { text: 'Internal Communications', link: '/club/communications' },
            { text: 'Meeting Minutes (MoM)', link: '/club/meetings' },
            { text: 'Annual Planning Roadmap', link: '/club/annual-planning' }
          ]
        },
        {
          text: '3. Team Documentation',
          collapsed: true,
          items: [
            { text: 'Team Framework', link: '/team/' },
            { text: 'Technical Team Charter', link: '/team/technical' },
            { text: 'Event Operations Charter', link: '/team/operations' },
            { text: 'Documentation Team Charter', link: '/team/documentation' },
            { text: 'Cross-Team Handshakes', link: '/team/dependencies' }
          ]
        },
        {
          text: '4. Technical Documentation',
          collapsed: true,
          items: [
            { text: 'Development Environment', link: '/technical/' },
            { text: 'Repository Conventions', link: '/technical/repository-structure' },
            { text: 'Git & Branching Workflow', link: '/technical/git-workflow' },
            { text: 'Conventional Commits', link: '/technical/commits' },
            { text: 'Pull Requests & Review', link: '/technical/pull-requests' },
            { text: 'React Standards', link: '/technical/react-standards' },
            { text: 'Node.js & API Standards', link: '/technical/api-standards' },
            { text: 'Microsoft Azure Baseline', link: '/technical/azure-cloud' },
            { text: 'Cloud Cost Controls', link: '/technical/cost-control' },
            { text: 'Secret Management', link: '/technical/secret-management' },
            { text: 'GitHub Org Governance', link: '/technical/github-admin' }
          ]
        },
        {
          text: '5. Project Documentation',
          collapsed: true,
          items: [
            { text: 'Project Documentation Standards', link: '/project/' },
            { text: 'Architecture Specifications', link: '/project/architecture' },
            { text: 'Deployment Runbooks', link: '/project/deployment' },
            { text: 'Active Projects Registry', link: '/project/active-registry' }
          ]
        },
        {
          text: '6. Event Documentation',
          collapsed: true,
          items: [
            { text: '6-Phase Event Lifecycle', link: '/events/' },
            { text: 'Speaker Outreach & Hosting', link: '/events/speaker-coordination' },
            { text: 'Venue & Logistics Checklists', link: '/events/venue-checklists' },
            { text: '70% Hands-on Workshop Guide', link: '/events/workshop-guide' },
            { text: 'Event-Day Master Runbook', link: '/events/runbook' },
            { text: 'Post-Event Reporting (PER)', link: '/events/post-event-report' }
          ]
        },
        {
          text: '7. Standard Operating Procedures',
          collapsed: false,
          items: [
            { text: 'SOP Index & Standards', link: '/sops/' },
            { text: 'SOP-ADM-01: College Permissions', link: '/sops/college-permissions' },
            { text: 'SOP-EVT-01: Workshop Planning', link: '/sops/workshop-planning' },
            { text: 'SOP-DEV-01: Project Approval', link: '/sops/project-approval' },
            { text: 'SOP-DEV-02: GitHub Repo Setup', link: '/sops/repo-setup' },
            { text: 'SOP-GOV-01: Leadership Handover', link: '/sops/leadership-handover' }
          ]
        },
        {
          text: '8. Policies & Guidelines',
          collapsed: true,
          items: [
            { text: 'Policies Overview', link: '/policies/' },
            { text: 'POL-GOV-01: Code of Conduct', link: '/policies/code-of-conduct' },
            { text: 'POL-DOC-01: Documentation Policy', link: '/policies/documentation-policy' },
            { text: 'POL-SEC-03: Secret Management', link: '/policies/secret-management' },
            { text: 'POL-OPS-01: Lab Usage Rules', link: '/policies/lab-safety' }
          ]
        },
        {
          text: '9. Templates & Standards',
          collapsed: true,
          items: [
            { text: 'Templates Overview', link: '/templates/' },
            { text: 'General Doc Template', link: '/templates/general-document' },
            { text: '14-Point SOP Template', link: '/templates/sop-template' },
            { text: 'Post-Event Report Template', link: '/templates/post-event-report' },
            { text: 'Meeting Minutes (MoM) Template', link: '/templates/meeting-minutes' },
            { text: 'Decision Record (ADR) Template', link: '/templates/decision-record' }
          ]
        },
        {
          text: '10. Reference Documentation',
          collapsed: true,
          items: [
            { text: 'Acronyms & Abbreviations', link: '/reference/' },
            { text: 'Approved Tools & Software', link: '/reference/approved-tools' },
            { text: 'Campus Emergency Contacts', link: '/reference/campus-directory' },
            { text: 'Common Development Errors', link: '/reference/common-errors' }
          ]
        },
        {
          text: '11. Archive & History',
          collapsed: true,
          items: [
            { text: 'Archive Status Guide', link: '/archive/' },
            { text: 'Verified Past Events (2025-26)', link: '/archive/past-events' },
            { text: 'Master Portal Changelog', link: '/archive/changelog' }
          ]
        },
        {
          text: 'Interactive Admin Tools',
          collapsed: false,
          items: [
            { text: 'Letter & Requisition Maker', link: '/tools/letter-maker' },
            { text: 'Event Operations Checklist', link: '/tools/checklist' },
            { text: 'Budget & Expense Ledger', link: '/tools/budget' },
            { text: 'Stage Anchoring Prompter', link: '/tools/anchoring' }
          ]
        }
      ]
    },

    // Global Search Configuration (Local lightning fast search)
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: 'Search documentation',
                buttonAriaLabel: 'Search documentation'
              },
              modal: {
                noResultsText: 'No matching documentation found',
                resetButtonTitle: 'Reset search',
                footer: {
                  selectText: 'to select',
                  navigateText: 'to navigate'
                }
              }
            }
          }
        }
      }
    },

    // Edit link on GitHub - Allows updating in README/Markdown directly!
    editLink: {
      pattern: 'https://github.com/mscprpcem/docs/edit/main/:path',
      text: 'Edit this page on GitHub'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mscprpcem' }
    ],

    footer: {
      message: 'MSC PRPCEM Documentation Repository • Authorized Club Members Only',
      copyright: 'Copyright © 2026 Microsoft Student Club, PRPCEM Amravati'
    }
  }
});
