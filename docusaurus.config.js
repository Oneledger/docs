// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OneLedger',
  tagline: 'Developer docs about OneLedger ecosystem',
  url: 'https://docs.oneledger.io',
  baseUrl: '/',
  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'OneLedger', // Usually your GitHub org/user name.
  projectName: 'oneledger-docs', // Usually your repo name.

  plugins: ['docusaurus-lunr-search'],

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/oneledger/docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        hideOnScroll: true,
        title: 'OneLedger Docs',
        logo: {
          alt: 'OneLedger logo',
          src: 'img/logo.svg',
          target: '_self',
        },
        items: [
          {
            to: 'docs/develop/new-to-project',
            position: 'left',
            label: 'Develop',
            activeBasePath: 'docs/develop',
          },
          {
            to: 'docs/bridge/architecture',
            position: 'left',
            label: 'Bridge',
            activeBasePath: 'docs/bridge',
          },
          {
            to: 'docs/elp/getting-started',
            position: 'left',
            label: 'ELP',
            activeBasePath: 'docs/elp',
          },
          // {
          //   to: 'docs/dex/getting-started',
          //   position: 'left',
          //   label: 'DEX',
          //   activeBasePath: 'docs/dex',
          // },
          {
            href: 'https://github.com/oneledger',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Telegram',
                href: 'https://t.me/oneledger',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/OneLedgerTech',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} OneLedger, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
