---
id: intro
slug: /
sidebar_position: 1
title: vrOS User Guide
---

import Link from "@docusaurus/Link";

<div className="doc-home">
  <div className="doc-hero">
    <span className="vros-badge" data-tone="primary">Release docs</span>
    <h1>Install vrOS, verify the runtime, and get productive without hunting through old research docs.</h1>
    <p>
      This docs center is the release-facing surface for vrOS. It focuses on installation, first-run
      setup, desktop control, overlay basics, integrations, troubleshooting, and release notes.
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
      <h2>Install and verify the release build</h2>
      <p>Use the Steam install path, then confirm the desktop control center and SteamVR overlays both come online.</p>
      <Link className="vros-btn" data-variant="secondary" to="/getting-started/install">
        <span className="vros-btn-label">Installation guide</span>
      </Link>
    </div>

    <div className="doc-panel">
      <p className="type-micro">Use the product</p>
      <h2>Learn the desktop control center and overlay stack</h2>
      <p>vrOS is desktop-first, with VR overlays as the presentation layer. Learn the control surfaces in that order.</p>
      <Link className="vros-btn" data-variant="secondary" to="/desktop-control-center">
        <span className="vros-btn-label">Control center</span>
      </Link>
    </div>

    <div className="doc-panel">
      <p className="type-micro">Need help?</p>
      <h2>Troubleshoot fast, then escalate cleanly</h2>
      <p>Use the release troubleshooting path first, then jump to the rebuilt support center if you still need help.</p>
      <a className="vros-btn" data-variant="secondary" href="https://support.vros.cat/troubleshooting">
        <span className="vros-btn-label">Troubleshooting</span>
      </a>
    </div>
  </div>

  <div className="doc-checklist">
    <p className="type-micro">What ships in this docs center</p>
    <h2>Release-focused documentation only.</h2>
    <ul>
      <li>Install, first-run setup, desktop control center, VR overlays, and integrations.</li>
      <li>Troubleshooting, FAQ, release notes, and support routing.</li>
      <li>Privacy and health &amp; safety pages remain available from the footer.</li>
      <li>Older RFCs, papers, and proposal-heavy material were intentionally removed from public navigation during release prep.</li>
    </ul>
  </div>
</div>
