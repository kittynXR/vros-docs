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
    <h1>Install vrOS, learn the gestures, and get unstuck fast.</h1>
    <p>
      This docs center is the release-facing surface for vrOS. The fastest way to recover from any stuck
      state is the system tray icon or a single dash-icon gesture — start with Shortcuts if anything's off.
    </p>
    <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
      <Link className="vros-btn" data-variant="primary" to="/shortcuts">
        <span className="vros-btn-label">Shortcuts & gestures</span>
      </Link>
      <Link className="vros-btn" data-variant="secondary" to="/getting-started/install">
        <span className="vros-btn-label">Install vrOS</span>
      </Link>
      <Link className="vros-btn" data-variant="ghost" to="/getting-started/first-run">
        <span className="vros-btn-label">First run</span>
      </Link>
    </div>
  </div>

  <div className="doc-home-grid">
    <div className="doc-panel">
      <p className="type-micro">Stuck?</p>
      <h2>Recover from any state in one gesture</h2>
      <p>Right-click the system tray icon to reset the dash overlay or the desktop window. Or use the dash-icon gestures to refresh and re-layout overlays without leaving VR.</p>
      <Link className="vros-btn" data-variant="secondary" to="/shortcuts">
        <span className="vros-btn-label">Shortcuts & gestures</span>
      </Link>
    </div>

    <div className="doc-panel">
      <p className="type-micro">Start here</p>
      <h2>Install and verify the release build</h2>
      <p>Use the Steam install path, then confirm vrOS launches and SteamVR shows the dash overlay.</p>
      <Link className="vros-btn" data-variant="secondary" to="/getting-started/install">
        <span className="vros-btn-label">Installation guide</span>
      </Link>
    </div>

    <div className="doc-panel">
      <p className="type-micro">Use vrOS</p>
      <h2>Creator surface and settings panel</h2>
      <p>The Desktop Control Center handles Soundboard, Live, and all vrOS settings. Overlay management happens in VR via the dash icon.</p>
      <Link className="vros-btn" data-variant="secondary" to="/desktop-control-center">
        <span className="vros-btn-label">Control center</span>
      </Link>
    </div>
  </div>

  <div className="doc-checklist">
    <p className="type-micro">What ships in this docs center</p>
    <h2>Release-focused documentation only.</h2>
    <ul>
      <li>Shortcuts &amp; gestures (start here when stuck), install, first run, desktop control center, VR overlays, integrations.</li>
      <li>Troubleshooting, FAQ, release notes, and support routing.</li>
      <li>Privacy and health &amp; safety pages remain available from the footer.</li>
      <li>Older RFCs, papers, and proposal-heavy material were intentionally removed from public navigation during release prep.</li>
    </ul>
  </div>
</div>
