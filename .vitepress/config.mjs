import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'MSC PRPCEM Docs',
  description: 'Official Documentation & Knowledge Base for Microsoft Student Club PRPCEM',
  cleanUrls: true,
  lastUpdated: true,

  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/MSC_logo.png' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap' }]
  ],

  themeConfig: {
    siteTitle: 'MSC PRPCEM',
    logo: '/MSC_logo.png',
    nav: [
      { text: 'Club Handbook', link: '/' },
      {
        text: '.NET Conf Amravati',
        items: [
          { text: 'Conference Hub', link: '/dotnet-conf/' },
          { text: 'Annual Editions', link: '/dotnet-conf/editions/' },
          { text: 'Sponsors & Partnerships', link: '/dotnet-conf/sponsors/' },
          { text: 'Speakers & Sessions', link: '/dotnet-conf/speakers/' },
          { text: 'Operations & SOPs', link: '/dotnet-conf/operations/' },
          { text: 'Finance & Budgets', link: '/dotnet-conf/finance/' },
          { text: 'Marketing & Brand', link: '/dotnet-conf/marketing/' },
          { text: 'Reports & Impact', link: '/dotnet-conf/reports/' },
          { text: 'Knowledge Base & Templates', link: '/dotnet-conf/knowledge-base/' },
          { text: 'Resource Archive', link: '/dotnet-conf/archive/' }
        ]
      }
    ],

    sidebar: {
      '/dotnet-conf/': [
        {
          text: 'Overview',
          collapsed: false,
          items: [
            { text: 'About the Conference', link: '/dotnet-conf/' },
            { text: 'History & Milestones', link: '/dotnet-conf/overview/history' },
            { text: 'Vision & Objectives', link: '/dotnet-conf/overview/vision' },
            { text: 'Achievements & Recognition', link: '/dotnet-conf/overview/achievements' }
          ]
        },
        {
          text: 'Annual Editions',
          collapsed: false,
          items: [
            { text: 'Editions Hub & Matrix', link: '/dotnet-conf/editions/' },
            { text: '2024 Edition (Inaugural)', link: '/dotnet-conf/editions/2024' },
            { text: '2025 Edition', link: '/dotnet-conf/editions/2025' },
            { text: '2026 Edition (Current)', link: '/dotnet-conf/editions/2026' },
            { text: '2027 Edition (Planning)', link: '/dotnet-conf/editions/2027' },
            { text: 'Future Editions Framework', link: '/dotnet-conf/editions/future-editions' }
          ]
        },
        {
          text: 'Sponsors & Partnerships',
          collapsed: false,
          items: [
            { text: 'Overview & Strategy', link: '/dotnet-conf/sponsors/' },
            { text: 'Sponsor Directory', link: '/dotnet-conf/sponsors/directory' },
            { text: 'Sponsorship Pipeline', link: '/dotnet-conf/sponsors/pipeline' },
            { text: 'Sponsorship Packages', link: '/dotnet-conf/sponsors/packages' },
            { text: 'Sponsorship History', link: '/dotnet-conf/sponsors/history' },
            { text: 'Deliverables Tracking', link: '/dotnet-conf/sponsors/deliverables' },
            { text: 'Sponsorship Documents', link: '/dotnet-conf/sponsors/documents' },
            { text: 'Partnership Directory', link: '/dotnet-conf/sponsors/partnerships' }
          ]
        },
        {
          text: 'Speakers',
          collapsed: false,
          items: [
            { text: 'Speakers Overview', link: '/dotnet-conf/speakers/' },
            { text: 'Speaker Directory', link: '/dotnet-conf/speakers/directory' },
            { text: 'Session Archive', link: '/dotnet-conf/speakers/sessions' },
            { text: 'Speaker Resources', link: '/dotnet-conf/speakers/resources' }
          ]
        },
        {
          text: 'Operations',
          collapsed: false,
          items: [
            { text: 'Operations Overview', link: '/dotnet-conf/operations/' },
            { text: 'Planning SOPs & Run Sheets', link: '/dotnet-conf/operations/sops' },
            { text: 'Logistics & Infrastructure', link: '/dotnet-conf/operations/logistics' },
            { text: 'Team & Volunteers', link: '/dotnet-conf/operations/team' },
            { text: 'Vendor Directory', link: '/dotnet-conf/operations/vendors' },
            { text: 'Risk Management & Legal', link: '/dotnet-conf/operations/risk-legal' }
          ]
        },
        {
          text: 'Finance',
          collapsed: false,
          items: [
            { text: 'Finance Overview', link: '/dotnet-conf/finance/' },
            { text: 'Edition Budgets', link: '/dotnet-conf/finance/budgets' },
            { text: 'Sponsorship Contributions', link: '/dotnet-conf/finance/contributions' },
            { text: 'Expense Tracking', link: '/dotnet-conf/finance/expenses' },
            { text: 'Financial Reports', link: '/dotnet-conf/finance/reports' }
          ]
        },
        {
          text: 'Marketing & Media',
          collapsed: false,
          items: [
            { text: 'Marketing Strategy', link: '/dotnet-conf/marketing/' },
            { text: 'Brand Guidelines', link: '/dotnet-conf/marketing/branding' },
            { text: 'Media Library', link: '/dotnet-conf/marketing/media-library' },
            { text: 'Promotional Templates', link: '/dotnet-conf/marketing/promotions' }
          ]
        },
        {
          text: 'Reports & Impact',
          collapsed: false,
          items: [
            { text: 'Impact Overview', link: '/dotnet-conf/reports/' },
            { text: 'Edition Reports', link: '/dotnet-conf/reports/editions' },
            { text: 'Community Impact', link: '/dotnet-conf/reports/impact' },
            { text: 'Historical Statistics', link: '/dotnet-conf/reports/statistics' }
          ]
        },
        {
          text: 'Knowledge Base',
          collapsed: false,
          items: [
            { text: 'Knowledge Base Hub', link: '/dotnet-conf/knowledge-base/' },
            { text: 'Standard Templates (20)', link: '/dotnet-conf/knowledge-base/templates' },
            { text: 'Lessons Learned', link: '/dotnet-conf/knowledge-base/lessons-learned' },
            { text: 'Best Practices', link: '/dotnet-conf/knowledge-base/best-practices' },
            { text: 'Handover & Continuity', link: '/dotnet-conf/knowledge-base/handover' }
          ]
        },
        {
          text: 'Archive',
          collapsed: false,
          items: [
            { text: 'Resource Archive', link: '/dotnet-conf/archive/' }
          ]
        }
      ],
      '/': [
        {
          text: 'Table of Contents',
          collapsed: false,
          items: [
            { text: 'Chapter 1: Introduction to MSC PRPCEM', link: '/' },
            { text: 'Chapter 2: Organizational Structure', link: '/chapter-2/' },
            { text: 'Chapter 3: Member Onboarding', link: '/chapter-3/' },
            { text: 'Chapter 4: Club Policies and Code of Conduct', link: '/chapter-4/' },
            { text: 'Chapter 5: Team Operations and Management', link: '/chapter-5/' },
            { text: 'Chapter 6: Event Management', link: '/chapter-6/' }
          ]
        },
        {
          text: 'Flagship Conferences',
          collapsed: false,
          items: [
            { text: '.NET Conf Amravati Portal', link: '/dotnet-conf/' }
          ]
        }
      ]
    },

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

    editLink: {
      pattern: 'https://github.com/mscprpcem/docs/edit/main/:path',
      text: 'Edit this page on GitHub'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mscprpcem/docs' }
    ],

    footer: {
      message: 'MSC PRPCEM Documentation Repository',
      copyright: 'Copyright © 2026 Microsoft Student Club, PRPCEM Amravati'
    }
  }
});
