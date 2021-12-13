const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'TW-CAT',
  tagline: 'Technical writing and computer-assisted translation',
  url: 'https://tw-cat.onrender.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'hktang13',
  projectName: 'tw-cat',
  i18n: {defaultLocale: 'en', locales: ['en','zh']},
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/hktang13/tw-cat/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/hktang13/tw-cat/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  i18n: {
    defaultLocale: 'zh',
    locales: ['en', 'zh'],
  },

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'TW-CAT',
        logo: {
          alt: 'Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'toc/prologue',
            position: 'left',
            label: 'Course',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/hktang13/tw-cat',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Modules',
            items: [
              {
                label: 'Technical writing',
                to: '/docs/tw/intro',
              },
              {
                label: 'Doc engineering',
                to: '/docs/doc-eng/intro',
              },
              {
                label: 'Computer-aided translation',
                to: '/docs/cat/intro',
              },
            ],
          },
          {
            title: 'Links',
            items: [
              {
                label: 'Docusaurus',
                href: 'https://docusaurus.io/',
              },
              {
                label: 'Markdown',
                href: 'https://daringfireball.net/projects/markdown/syntax',
              }
            ],
          },
          {
            title: 'Source code',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/hktang13/tw-cat',
              },
              {
                label: 'Gitee',
                href: 'https://gitee.com/hktang13/tw-cat',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} TW-CAT. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      googleAnalytics: {
        trackingID: 'UA-294477239-1',
      },
    }),
});
