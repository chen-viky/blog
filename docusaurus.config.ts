import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Viky‘ Site",
  tagline: "More Professional",
  // favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://viky-chen.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/website/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "viky-chen", // Usually your GitHub org/user name.
  projectName: "website", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: "https://github.com/viky-chen/website",
        },

        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Viky' Site",
      logo: {
        alt: "Viky' Site",
        src: "img/avatar.jpeg",
        style: {
          borderRadius: "50%",
        },
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "languageSidebar",
          position: "left",
          label: "Language",
        },
        {
          type: "docSidebar",
          sidebarId: "webSidebar",
          position: "left",
          label: "Web",
        },
        {
          type: "docSidebar",
          sidebarId: "mobileSidebar",
          position: "left",
          label: "Mobile",
        },
        {
          type: "docSidebar",
          sidebarId: "desktopSidebar",
          position: "left",
          label: "Desktop",
        },
        {
          type: "docSidebar",
          sidebarId: "serverSidebar",
          position: "left",
          label: "Server",
        },
        {
          type: "docSidebar",
          sidebarId: "aiSidebar",
          position: "left",
          label: "AI",
        },
        {
          type: "docSidebar",
          sidebarId: "mathSidebar",
          position: "left",
          label: "Math",
        },
        {
          type: "docSidebar",
          sidebarId: "englishSidebar",
          position: "left",
          label: "English",
        },
        {
          href: "https://github.com/viky-chen",
          label: "GitHub",
          position: "right",
        },
      ],
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
