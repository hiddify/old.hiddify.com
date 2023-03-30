// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Hiddify",
  tagline: "ابزار حرفه‌ای و قدرتمند ضدسانسور",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://hiddify.com/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "hiddify", // Usually your GitHub org/user name.
  projectName: "hiddify-config", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "fa",
    locales: ["fa", "en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/hiddify/hiddify.com/blob/main/",
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl: "https://github.com/hiddify/hiddify.com/blob/main/",
        // },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/social-card.jpg",
      navbar: {
        title: "هیدیفای",
        logo: {
          alt: "Hiddify logo",
          src: "img/logo.png",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "آموزش",
          },
          // { to: "/blog", label: "Blog", position: "left" },
          {
            type: "localeDropdown",
            position: "right",
          },
          {
            href: "https://github.com/hiddify/hiddify-config",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          // {
          //   title: "مستندات",
          //   items: [
          //     {
          //       label: "معرفی",
          //       to: "/docs/intro",
          //     },
          //     {
          //       label: "نصب",
          //       to: "/docs/category/%D9%86%D8%B5%D8%A8",
          //     },
          //   ],
          // },
          {
            title: "Community",
            items: [
              {
                label: "Telegram Channel",
                href: "https://t.me/hiddify",
              },
              {
                label: "Telegram Discussion",
                href: "https://t.me/hiddify_board",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/hiddify1",
              },
            ],
          },
          {
            title: "More",
            items: [
              // {
              //   label: "Blog",
              //   to: "/blog",
              // },
              {
                label: "GitHub",
                href: "https://github.com/hiddify/hiddify-config",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Hiddify, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
