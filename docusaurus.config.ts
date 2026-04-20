import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "vrOS User Guide",
  tagline: "Install, configure, and operate vrOS for release builds.",
  favicon: "img/favicon.ico",

  url: "https://docs.vros.cat",
  baseUrl: "/",
  trailingSlash: false,

  organizationName: "kittynXR",
  projectName: "vros-docs",

  onBrokenLinks: "warn",
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },

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
          routeBasePath: "/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/vros-social-card.png",
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: "vrOS",
      logo: {
        alt: "vrOS Logo",
        src: "img/logo.png",
        srcDark: "img/logo.png",
        width: 32,
        height: 32,
      },
      items: [
        {
          to: "/",
          label: "Home",
          position: "left",
        },
        {
          to: "/getting-started/install",
          label: "Install",
          position: "left",
        },
        {
          to: "/desktop-control-center",
          label: "Desktop Control Center",
          position: "left",
        },
        {
          to: "/troubleshooting",
          label: "Troubleshooting",
          position: "left",
        },
        {
          to: "/release-notes",
          label: "Release Notes",
          position: "left",
        },
        {
          href: "https://support.vros.cat/",
          label: "Support",
          position: "right",
        },
        {
          href: "https://vros.cat/",
          label: "Main Site",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Install",
              to: "/getting-started/install",
            },
            {
              label: "First Run",
              to: "/getting-started/first-run",
            },
            {
              label: "Release Notes",
              to: "/release-notes",
            },
          ],
        },
        {
          title: "Product",
          items: [
            {
              label: "Main Site",
              href: "https://vros.cat/",
            },
            {
              label: "Steam",
              href: "https://store.steampowered.com/app/3873610",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "Support Center",
              href: "https://support.vros.cat/",
            },
            {
              label: "Report a Bug",
              href: "https://support.vros.cat/report-bug",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Health & Safety",
              to: "/health",
            },
            {
              label: "Privacy Policy",
              to: "/privacy",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} vrOS. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.vsDark,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["rust", "toml"],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
