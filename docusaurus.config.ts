// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config: Config = {
  title: 'Wave',
  tagline: 'One Language, Infinite Possibilities',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://wave-lang.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  customFields: {
    githubUrl: 'https://github.com/LunaStev/Wave',
  },

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'LunaStev', // Usually your GitHub org/user name.
  projectName: 'Wave', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    /*
      - 순서 -
      영어 'en',
      한국어 'ko',
      스페인어 'es',
      페르시아어 'fa',
      르완다어 'rw',
      포르투갈어 'pt',
      프랑스어 'fr',
      이탈리아어 'it',
      네덜란드어 'nl',
      독일어 'de',
      러시아어 'ru',
      벨라루스어 'be',
      폴란드어 'pl',
      우크라이나어 'uk',
      일본어 'ja',
      베트남어 'vi',
      타이어 'th',
      힌디어 'hi',
      타밀어 'ta',
      스와힐리어 'sw',
      아랍어 'ar',
      중국어(간체) 'zh-CN',
      중국어(번체) 'zh-TW',
      광동어 'yue',
      아이누어 '',
      에스페란토 'eo',
    */
    /*
    임시 번역 문서
    'rw',
    'pt',
    'it',
    'nl',
    'be',
    'pl',
    'uk',
    'th',
    'ta',
    'sw',
    'ar',
    'zh-TW',
    'yue',
    'eo',
     */
    locales:
        [
          'en',
          'ko',
          'es',
          'fa',
          'zh',
          'fr',
          'de',
          'ru',
          'ja',
          'vi',
          'sw',
          'hi',
          'bn',
          'ta',
          'te',
        ],
    localeConfigs: {
      fa: {
        direction: 'rtl',
      }
    },
    path: 'i18n',
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
          path: 'docs',
          include: ['**/*.md', '**/*.mdx'],
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {name: 'keywords', content: 'Wave, programming language, web development, operating systems, AI, blockchain, hardware, cryptography, networking, compilers'},
        {name: 'description', content: 'Wave is a modern programming language that redefines development with an integrated ecosystem across web, OS, AI, and hardware.'},
        {name: 'author', content: 'LunaStev'},
        {name: 'robots', content: 'index, follow'},
        {property: 'og:title', content: 'Wave Programming Language'},
        {property: 'og:description', content: 'Wave is a modern programming language that integrates web, OS, AI, blockchain, hardware, and more into one ecosystem.'},
        {property: 'og:url', content: 'https://wave-lang.dev'},
        {name: 'twitter:title', content: 'Wave Programming Language'},
        {name: 'twitter:description', content: 'Wave is a modern programming language designed for an integrated ecosystem that spans web, OS, AI, blockchain, and hardware.'},
      ],
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.png',
      navbar: {
        title: 'Wave',
        logo: {
          alt: 'Wave Logo',
          src: '/img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            type: 'custom-LogoVersion',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/LunaStev/Wave/releases',
            label: 'Releases',
            position: 'right',
          },
          {
            href: 'https://github.com/LunaStev/Wave',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://lunastev.github.io/wave-testing/',
            label: 'Wave Testing',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Docs',
                to: '/docs/intro/',
              },
              {
                label: 'Syntax',
                to: '/docs/syntax/',
              },
              {
                label: 'Ecosystem',
                to: '/docs/ecosystem/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/wave-lang',
              },
              {
                label: 'Discord',
                href: 'https://discord.com/invite/Kuk2qXFjc5',
              },
              {
                label: 'X',
                href: 'https://x.com/lunastev_',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/LunaStev/Wave',
              },
            ],
          },
        ],
        copyright: `Copyright © 2023 - ${new Date().getFullYear()} Wave with LunaStev. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
