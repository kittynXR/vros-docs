---
id: intro
slug: /
sidebar_position: 1
title: vrOS Docs
---

import Link from "@docusaurus/Link";

<div className="doc-home">
  <div className="doc-hero">
    <span className="vros-badge" data-tone="primary">Release docs</span>
    <h1>Install vrOS and start using overlays fast.</h1>
    <p>
      These docs cover install, first run, desktop control, overlays, creator tools, and troubleshooting.
    </p>
    <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
      <Link className="vros-btn" data-variant="primary" to="/getting-started/install">
        <span className="vros-btn-label">Install vrOS</span>
      </Link>
      <Link className="vros-btn" data-variant="secondary" to="/getting-started/first-run">
        <span className="vros-btn-label">First run</span>
      </Link>
      <a className="vros-btn" data-variant="ghost" href="https://support.vros.cat/">
        <span className="vros-btn-label">Open support</span>
      </a>
    </div>
  </div>

  <div className="doc-home-grid">
    <div className="doc-panel">
      <p className="type-micro">Start here</p>
      <h2>Install and verify vrOS</h2>
      <p>Use the Steam install, then confirm the desktop app and overlays are working.</p>
      <Link className="vros-btn" data-variant="secondary" to="/getting-started/install">
        <span className="vros-btn-label">Installation guide</span>
      </Link>
    </div>

    <div className="doc-panel">
      <p className="type-micro">Use the product</p>
      <h2>Learn the basics</h2>
      <p>Start with the desktop control center, then move into VR overlays and integrations.</p>
      <Link className="vros-btn" data-variant="secondary" to="/desktop-control-center">
        <span className="vros-btn-label">Control center</span>
      </Link>
    </div>

    <div className="doc-panel">
      <p className="type-micro">Need help?</p>
      <h2>Troubleshoot, then escalate</h2>
      <p>Try troubleshooting first, then use support or bug reports if you still need help.</p>
      <a className="vros-btn" data-variant="secondary" href="https://support.vros.cat/troubleshooting">
        <span className="vros-btn-label">Troubleshooting</span>
      </a>
    </div>
  </div>

  <div className="doc-checklist">
    <p className="type-micro">What is here</p>
    <h2>Release-focused docs only.</h2>
    <ul>
      <li>Install, first run, desktop control, overlays, and integrations.</li>
      <li>Troubleshooting, FAQ, release notes, and support links.</li>
      <li>Privacy and health &amp; safety pages are still available.</li>
      <li>Older research-heavy docs stay out of public navigation for now.</li>
    </ul>
  </div>
</div>
