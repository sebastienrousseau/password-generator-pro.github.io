import { headers } from './config/head'; // Import headers
import { deNavbar, enNavbar, esNavbar, frNavbar } from './config/nav'; // Import English navbar
import { deSidebar, enSidebar, esSidebar, frSidebar } from './config/sidebar'; // Import English sidebar

module.exports = {
  base: '/',
  head: headers,
  locales: {
    '/': {
      lang: 'en-GB',
      title: 'Password Generator Pro',
      description: 'A Fast, Simple And Secure Password Generator.',
    },
    '/de/': {
      lang: 'de-DE', // German
      title: 'Password Generator Pro',
      description: 'Ein schneller, einfacher und sicherer Passwort-Generator.',
    },
    '/es/': {
      lang: 'es-ES', // Spanish
      title: 'Password Generator Pro',
      description: 'Un Generador De Contraseñas Rápido, Sencillo Y Seguro.',
    },
    '/fr/': {
      lang: 'fr-FR', // French
      title: 'Password Generator Pro',
      description: 'Un Générateur De Mots De Passe Rapide, Simple Et Sécurisé.',
    },
  },
  // Enable evergreen browsers support
  evergreen: true,
  // Theme default color scheme
  theme: 'default-prefers-color-scheme',
  // Theme configuration
  themeConfig: {
    // Search bar configuration
    search: false,
    // Logo configuration
    logo: '/password-generator-pro.webp',
    // The GitHub repo path
    repo: 'sebastienrousseau/password-generator-pro.github.io',
    // The label linking to the repo
    repoLabel: 'GitHub',
    // if your docs are not at the root of the repo:
    docsDir: 'docs',
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: 'main',
    // defaults to false, set to true to enable
    editLinks: true,
    // locale for edit link text
    locales: {
      '/': {
        // text for the language dropdown
        selectText: 'Languages',
        // Aria Label for locale in the dropdown
        ariaLabel: 'Languages',
        // label for this locale in the language dropdown
        label: 'English',
        // Custom text for edit link. Defaults to "Edit this page"
        editLinkText: 'Edit this page on GitHub',
        // Custom navbar values
        nav: enNavbar,
        // Custom sidebar values
        sidebar: enSidebar,
      },
      '/de/': {
        // text for the language dropdown
        selectText: 'Sprachen',
        // Aria Label for locale in the dropdown
        ariaLabel: 'Sprachen',
        // label for this locale in the language dropdown
        label: 'Deutsch',
        // Custom text for edit link. Defaults to "Edit this page"
        editLinkText: 'Diese Seite auf GitHub bearbeiten',
        // Custom navbar values
        nav: deNavbar,
        // Custom sidebar values
        sidebar: deSidebar,
      },
      '/es/': {
        // text for the language dropdown
        selectText: 'Idiomas',
        // Aria Label for locale in the dropdown
        ariaLabel: 'Idiomas',
        // label for this locale in the language dropdown
        label: 'Español',
        // Custom text for edit link. Defaults to "Edit this page"
        editLinkText: 'Editar esta página en GitHub',
        // Custom navbar values
        nav: esNavbar,
        // Custom sidebar values
        sidebar: esSidebar,
      },
      '/fr/': {
        // text for the language dropdown
        selectText: 'Langues',
        // Aria Label for locale in the dropdown
        ariaLabel: 'Langues',
        // label for this locale in the language dropdown
        label: 'Français',
        // Custom text for edit link. Defaults to "Edit this page"
        editLinkText: 'Éditez cette page sur GitHub',
        // Custom navbar values
        nav: frNavbar,
        // Custom sidebar values
        sidebar: frSidebar,
      },
    },
    chainWebpack: (config) => {
      config.plugin('html').tap((args) => {
        args[0].minify = {
          collapseBooleanAttributes: true,
          collapseWhitespace: true,
          minifyCSS: true,
          minifyJS: true,
          minifyURLs: true,
          removeAttributeQuotes: true,
          removeComments: true,
          removeEmptyAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
        }
        return args
      })
    },
  },
  plugins: [
    [
      'vuepress-plugin-sitemap',
      {
        hostname: 'https://password-generator.pro',
        outFile: 'sitemap.xml',
        exclude: ['/404.html'],
      },
    ],
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true,
        updateIcon: true,
        ignore: [
          '/404.html',
          '/offline.html',
          '/de/404.html',
          '/de/offline.html',
          '/es/404.html',
          '/es/offline.html',
          '/fr/404.html',
          '/fr/offline.html',
        ],
      },
    ],
    ['vuepress-plugin-code-copy', true],
    [
      'html-webpack-plugin',
      {
        minify: {
          collapseBooleanAttributes: true,
          collapseWhitespace: true,
          minifyCSS: true,
          minifyJS: true,
          minifyURLs: true,
          removeAttributeQuotes: true,
          removeComments: true,
          removeEmptyAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
        },
      },
    ],
  ],
}
