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
      { text: 'Chapter 1', link: '/' },
      { text: 'Chapter 2', link: '/chapter-2/' },
      { text: 'Chapter 3', link: '/chapter-3/' },
      { text: 'Chapter 4', link: '/chapter-4/' }
    ],

    sidebar: [
      {
        text: 'Table of Contents',
        collapsed: false,
        items: [
          { text: 'Chapter 1: Introduction to MSC PRPCEM', link: '/' },
          { text: 'Chapter 2: Organizational Structure', link: '/chapter-2/' },
          { text: 'Chapter 3: Member Onboarding', link: '/chapter-3/' },
          { text: 'Chapter 4: Club Policies and Code of Conduct', link: '/chapter-4/' }
        ]
      }
    ],

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
