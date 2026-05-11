import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  docsSidebar: [
    "intro",
    "shortcuts",
    {
      type: "category",
      label: "Getting Started",
      items: ["getting-started/install", "getting-started/first-run"],
    },
    "desktop-control-center",
    "vr-overlays",
    "integrations",
    "troubleshooting",
    "faq",
    "release-notes",
  ],
};

export default sidebars;
